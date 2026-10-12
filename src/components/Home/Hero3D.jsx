import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { isLitePerf } from "../../perf";

// Animated 3D scene that sits behind the hero portrait.
//
// three.js is loaded with a dynamic import, so it lands in its own chunk and
// never delays the first paint of the page. The scene:
//   - a laptop running a terminal, a padlock, a USB stick and a ">_" tile
//   - two small floating shapes
//   - tilts toward the mouse and spins a little as you scroll
// It pauses when the hero is off screen or the tab is hidden, and renders a
// single still frame for visitors who ask for reduced motion.

const PALETTE_LIGHT = ["#c6ff3d", "#0a0a0a", "#d9d9d4", "#9ae600", "#2a2a2a"];
const PALETTE_DARK = ["#c6ff3d", "#f5f5f0", "#3a3a3a", "#9ae600", "#8a8a85"];

const Hero3D = () => {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const applyThemeRef = useRef(null);

  useEffect(() => {
    themeRef.current = theme;
    if (applyThemeRef.current) applyThemeRef.current(theme);
  }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let cleanup = () => {};

    // Phones and low-power devices skip the 3D scene entirely — the hero
    // still has the portrait / hacker swap, and the page stays fast.
    const lowPower =
      window.innerWidth < 768 ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
      (navigator.connection && navigator.connection.saveData);
    if (lowPower) return undefined;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    Promise.all([
      import("three"),
      import("three/examples/jsm/environments/RoomEnvironment.js"),
    ])
      .then(([THREE, { RoomEnvironment }]) => {
        if (disposed) return;

        // ---------- renderer / scene / camera ----------
        let renderer;
        try {
          renderer = new THREE.WebGLRenderer({
            antialias: (window.devicePixelRatio || 1) < 2,
            alpha: true,
            powerPreference: "high-performance",
            // If the browser would fall back to slow software rendering
            // (e.g. Chrome with "graphics acceleration" turned off), don't
            // create the scene at all.
            failIfMajorPerformanceCaveat: true,
          });
        } catch (e) {
          return; // no WebGL — the portrait still looks fine on its own
        }
        // Double-check for a software GPU (SwiftShader / llvmpipe).
        try {
          const gl = renderer.getContext();
          const dbg = gl.getExtension("WEBGL_debug_renderer_info");
          const gpu = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
          if (/swiftshader|llvmpipe|software|basic render/i.test(gpu)) {
            renderer.dispose();
            return;
          }
        } catch (e) {
          // ignore — just carry on
        }
        const lite = isLitePerf();
        renderer.setPixelRatio(lite ? 1 : Math.min(window.devicePixelRatio || 1, 1.25));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        renderer.domElement.setAttribute("aria-hidden", "true");
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const pmrem = new THREE.PMREMGenerator(renderer);
        const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environment = envTex;

        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.set(0, 0, 11);

        const key = new THREE.DirectionalLight(0xffffff, 1.4);
        key.position.set(4, 6, 6);
        scene.add(key);
        const rim = new THREE.PointLight(0xffffff, 30, 30);
        rim.position.set(-5, -2, 3);
        scene.add(rim);

        // ---------- objects ----------
        const world = new THREE.Group();
        scene.add(world);

        // Two plain shapes (kept light for performance) ...
        const geos = [
          new THREE.SphereGeometry(0.4, 32, 32),
          new THREE.IcosahedronGeometry(0.45, 0),
        ];
        const layout = [
          [-2.3, 0.1, -0.6],
          [-0.5, -3.0, -0.8],
        ];

        const floaters = geos.map((g, i) => {
          const mat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: i === 0 ? 0.6 : 0.1,
            roughness: 0.2,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
          });
          const m = new THREE.Mesh(g, mat);
          const [x, y, z] = layout[i];
          m.position.set(x, y, z);
          m.userData = {
            base: new THREE.Vector3(x, y, z),
            speed: 0.45 + i * 0.15,
            phase: i * 1.7,
            spin: new THREE.Vector3(0.3 + i * 0.2, 0.4, 0.1),
          };
          world.add(m);
          return m;
        });

        // ... plus four "hacking tools": a laptop running a terminal, a
        // padlock, a USB stick and a floating ">_" prompt tile.
        const LIME = new THREE.Color("#c6ff3d");
        const darkMat = new THREE.MeshStandardMaterial({ color: "#1a1a1a", metalness: 0.6, roughness: 0.35 });
        const metalMat = new THREE.MeshStandardMaterial({ color: "#d9d9d4", metalness: 1, roughness: 0.22 });
        const limeMat = new THREE.MeshStandardMaterial({ color: LIME, metalness: 0.3, roughness: 0.3 });
        const glowMat = new THREE.MeshBasicMaterial({ color: LIME });

        // Terminal screen drawn on a canvas, refreshed a few times a second.
        const termCanvas = document.createElement("canvas");
        termCanvas.width = 512;
        termCanvas.height = 320;
        const tctx = termCanvas.getContext("2d");
        const termTex = new THREE.CanvasTexture(termCanvas);
        termTex.colorSpace = THREE.SRGBColorSpace;
        const TERM = [
          "$ whoami",
          "cyber-mxrn",
          "$ ./scan --target localhost",
          "[+] 22/tcp   open  ssh",
          "[+] 443/tcp  open  https",
          "$ ssh thomorn@portfolio",
          "> decrypting keys ...",
          "> ##########  100%",
          "> ACCESS GRANTED_",
          "$ cat skills.txt",
          "react node fastapi figma",
          "$ clear",
        ];
        let termStep = 0;
        const drawTerm = () => {
          tctx.fillStyle = "#050805";
          tctx.fillRect(0, 0, 512, 320);
          tctx.fillStyle = "rgba(198,255,61,0.06)";
          for (let y = 0; y < 320; y += 4) tctx.fillRect(0, y, 512, 1);
          tctx.font = "bold 26px Menlo, Consolas, monospace";
          const shown = termStep % (TERM.length + 4);
          const start = Math.max(0, shown - 8);
          for (let i = start; i < Math.min(shown, TERM.length); i++) {
            const line = TERM[i];
            tctx.fillStyle = line.startsWith("$") ? "#f5f5f0" : "#c6ff3d";
            tctx.fillText(line, 22, 44 + (i - start) * 34);
          }
          termTex.needsUpdate = true;
        };
        drawTerm();

        const laptop = new THREE.Group();
        const base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.07, 1.0), darkMat);
        const keys = new THREE.Mesh(
          new THREE.PlaneGeometry(1.25, 0.5),
          new THREE.MeshStandardMaterial({ color: "#0d0d0d", roughness: 0.8 })
        );
        keys.rotation.x = -Math.PI / 2;
        keys.position.set(0, 0.04, -0.12);
        const pad = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.22), new THREE.MeshStandardMaterial({ color: "#242424" }));
        pad.rotation.x = -Math.PI / 2;
        pad.position.set(0, 0.04, 0.32);
        const lid = new THREE.Group();
        lid.position.set(0, 0.035, -0.5);
        lid.rotation.x = -0.28;
        const lidBox = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.95, 0.05), darkMat);
        lidBox.position.y = 0.475;
        const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.36, 0.82), new THREE.MeshBasicMaterial({ map: termTex }));
        screen.position.set(0, 0.475, 0.027);
        lid.add(lidBox, screen);
        laptop.add(base, keys, pad, lid);
        const screenLight = new THREE.PointLight(LIME, 6, 3);
        screenLight.position.set(0, 0.6, 0.4);
        laptop.add(screenLight);
        laptop.scale.setScalar(0.9);

        const lock = new THREE.Group();
        const lockBody = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.56, 0.28), limeMat);
        const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.055, 12, 28, Math.PI), metalMat);
        shackle.position.y = 0.28;
        const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.12, 12), metalMat);
        legL.position.set(-0.22, 0.25, 0);
        const legR = legL.clone();
        legR.position.x = 0.22;
        const keyhole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 16), darkMat);
        keyhole.rotation.x = Math.PI / 2;
        keyhole.position.set(0, 0.02, 0.145);
        const slot = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.12, 0.02), darkMat);
        slot.position.set(0, -0.07, 0.145);
        lock.add(lockBody, shackle, legL, legR, keyhole, slot);

        const usb = new THREE.Group();
        const usbBody = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.75, 0.13), darkMat);
        const usbPlug = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.26, 0.08), metalMat);
        usbPlug.position.y = 0.5;
        const usbLed = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), glowMat);
        usbLed.position.set(0, -0.22, 0.07);
        const usbStripe = new THREE.Mesh(new THREE.BoxGeometry(0.345, 0.06, 0.135), limeMat);
        usbStripe.position.y = 0.05;
        usb.add(usbBody, usbPlug, usbLed, usbStripe);
        usb.rotation.z = 0.5;

        const promptCanvas = document.createElement("canvas");
        promptCanvas.width = 256;
        promptCanvas.height = 256;
        const pctx = promptCanvas.getContext("2d");
        pctx.fillStyle = "#0a0a0a";
        pctx.fillRect(0, 0, 256, 256);
        pctx.fillStyle = "#c6ff3d";
        pctx.font = "bold 120px Menlo, Consolas, monospace";
        pctx.textAlign = "center";
        pctx.textBaseline = "middle";
        pctx.fillText(">_", 128, 136);
        const promptTex = new THREE.CanvasTexture(promptCanvas);
        promptTex.colorSpace = THREE.SRGBColorSpace;
        const tile = new THREE.Group();
        const tileBox = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.85, 0.14), limeMat);
        const tileFace = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.75), new THREE.MeshBasicMaterial({ map: promptTex }));
        tileFace.position.z = 0.071;
        tile.add(tileBox, tileFace);

        // [object, position, how it moves]
        const tools = [
          [laptop, [-1.75, 2.1, 0.2], "sway"],
          [lock, [2.6, 1.7, 0], "spin"],
          [usb, [-2.1, -1.5, 0.4], "spin"],
          [tile, [2.5, -1.7, 0.5], "sway"],
        ].map(([obj, [x, y, z], mode], i) => {
          obj.position.set(x, y, z);
          obj.userData = { base: new THREE.Vector3(x, y, z), mode, speed: 0.5 + i * 0.12, phase: i * 1.4 };
          world.add(obj);
          return obj;
        });

        // ---------- theme ----------
        const applyTheme = (t) => {
          const pal = t === "dark" ? PALETTE_DARK : PALETTE_LIGHT;
          floaters.forEach((m, i) => m.material.color.set(pal[(i + 1) % pal.length]));
          darkMat.color.set(t === "dark" ? "#2a2a2a" : "#161616");
          rim.color.set(pal[0]);
          renderer.toneMappingExposure = t === "dark" ? 1.15 : 1.0;
          if (!running) renderer.render(scene, camera);
        };

        // ---------- sizing ----------
        const resize = () => {
          const w = mount.clientWidth || 1;
          const h = mount.clientHeight || 1;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          // Pull the camera back on narrow screens so shapes stay in frame.
          camera.position.z = w < 520 ? 13.5 : 11;
          camera.updateProjectionMatrix();
          if (!running) renderer.render(scene, camera);
        };

        // ---------- interaction ----------
        const pointer = { x: 0, y: 0 };
        const eased = { x: 0, y: 0 };
        const onPointer = (e) => {
          pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
          pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        let scrollY = window.scrollY;
        const onScroll = () => {
          scrollY = window.scrollY;
        };

        // ---------- loop ----------
        const clock = new THREE.Clock();
        let running = false;
        let raf = 0;
        let inView = true;

        const frame = () => {
          const t = clock.getElapsedTime();
          eased.x += (pointer.x - eased.x) * 0.05;
          eased.y += (pointer.y - eased.y) * 0.05;

          const scroll = Math.min(scrollY / 800, 1);
          world.rotation.y = eased.x * 0.45 + scroll * 0.9;
          world.rotation.x = eased.y * 0.3 + scroll * 0.25;
          world.position.y = scroll * 1.2;


          floaters.forEach((m) => {
            const d = m.userData;
            m.position.y = d.base.y + Math.sin(t * d.speed + d.phase) * 0.28;
            m.position.x = d.base.x + Math.cos(t * d.speed * 0.7 + d.phase) * 0.12;
            m.rotation.x = t * d.spin.x;
            m.rotation.y = t * d.spin.y;
          });

          tools.forEach((o) => {
            const d = o.userData;
            o.position.y = d.base.y + Math.sin(t * d.speed + d.phase) * 0.22;
            o.position.x = d.base.x + Math.cos(t * d.speed * 0.7 + d.phase) * 0.1;
            if (d.mode === "spin") {
              o.rotation.y = t * 0.6 + d.phase;
            } else {
              // keep the screen / prompt facing the viewer, just rocking
              o.rotation.y = Math.sin(t * 0.5 + d.phase) * 0.45 + (o === laptop ? 0.45 : -0.2);
              o.rotation.x = (o === laptop ? 0.35 : 0) + Math.sin(t * 0.4 + d.phase) * 0.08;
            }
          });

          // advance the terminal text ~5 times a second
          const step = Math.floor(t * 5);
          if (step !== termStep) {
            termStep = step;
            drawTerm();
          }

          renderer.render(scene, camera);
        };

        // Cap at ~45 fps: looks the same for slow floating shapes, but on
        // 120 Hz screens it's well under half the GPU work.
        let last = 0;
        const loop = (now = 0) => {
          raf = requestAnimationFrame(loop);
          if (now - last < (lite ? 32 : 22)) return;
          last = now;
          frame();
        };
        const start = () => {
          if (running || reduceMotion || !inView || document.hidden) return;
          running = true;
          clock.start();
          loop();
        };
        const stop = () => {
          running = false;
          cancelAnimationFrame(raf);
        };

        const io = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
          inView ? start() : stop();
        });
        io.observe(mount);

        const onVisibility = () => (document.hidden ? stop() : start());
        const ro = new ResizeObserver(resize);
        ro.observe(mount);

        window.addEventListener("pointermove", onPointer, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        document.addEventListener("visibilitychange", onVisibility);

        applyThemeRef.current = applyTheme;
        applyTheme(themeRef.current);
        resize();
        frame(); // first frame right away (and the only one for reduced motion)
        mount.classList.add("is-ready");
        start();

        cleanup = () => {
          stop();
          io.disconnect();
          ro.disconnect();
          window.removeEventListener("pointermove", onPointer);
          window.removeEventListener("scroll", onScroll);
          document.removeEventListener("visibilitychange", onVisibility);
          applyThemeRef.current = null;
          scene.traverse((o) => {
            if (o.geometry) o.geometry.dispose();
            if (o.material) o.material.dispose();
          });
          termTex.dispose();
          promptTex.dispose();
          envTex.dispose();
          pmrem.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      })
      .catch(() => {
        // Chunk failed to load — fail quietly, the hero still works.
      });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={mountRef} className="hero-3d" aria-hidden="true" />;
};

export default Hero3D;
