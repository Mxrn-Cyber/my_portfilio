import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

// Animated 3D scene that sits behind the hero portrait.
//
// three.js is loaded with a dynamic import, so it lands in its own chunk and
// never delays the first paint of the page. The scene:
//   - one glossy, iridescent "hero" knot in the middle
//   - a ring of smaller floating shapes in saturated colors
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
          });
        } catch (e) {
          return; // no WebGL — the portrait still looks fine on its own
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
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

        const knotMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 0.25,
          roughness: 0.12,
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          iridescence: 1,
          iridescenceIOR: 1.6,
          iridescenceThicknessRange: [120, 480],
        });
        const knot = new THREE.Mesh(
          new THREE.TorusKnotGeometry(1.15, 0.36, 128, 20, 2, 3),
          knotMat
        );
        knot.position.set(0.4, 0.6, -2.2);
        world.add(knot);

        // Kept to four shapes (was eight) for performance.
        const geos = [
          new THREE.IcosahedronGeometry(0.55, 0),
          new THREE.TorusGeometry(0.45, 0.17, 16, 40),
          new THREE.SphereGeometry(0.42, 32, 32),
          new THREE.OctahedronGeometry(0.5, 0),
        ];

        // Hand-placed so nothing sits on the face in the portrait.
        const layout = [
          [-2.4, 2.3, 0.2],
          [2.5, 2.2, -0.4],
          [-2.6, -1.4, 0.4],
          [2.4, -2.3, 0.6],
        ];

        const floaters = geos.map((g, i) => {
          const mat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: i % 3 === 0 ? 0.6 : 0.1,
            roughness: i % 2 === 0 ? 0.18 : 0.35,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
          });
          const m = new THREE.Mesh(g, mat);
          const [x, y, z] = layout[i];
          m.position.set(x, y, z);
          m.userData = {
            base: new THREE.Vector3(x, y, z),
            speed: 0.4 + (i % 4) * 0.15,
            phase: i * 1.3,
            spin: new THREE.Vector3(
              0.3 + (i % 3) * 0.2,
              0.4 + (i % 2) * 0.3,
              0.1
            ),
          };
          world.add(m);
          return m;
        });

        // ---------- theme ----------
        const applyTheme = (t) => {
          const pal = t === "dark" ? PALETTE_DARK : PALETTE_LIGHT;
          floaters.forEach((m, i) => m.material.color.set(pal[i % pal.length]));
          knotMat.color.set(t === "dark" ? "#e8ffd0" : "#ffffff");
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

          knot.rotation.x = t * 0.25;
          knot.rotation.y = t * 0.35;

          floaters.forEach((m) => {
            const d = m.userData;
            m.position.y = d.base.y + Math.sin(t * d.speed + d.phase) * 0.28;
            m.position.x = d.base.x + Math.cos(t * d.speed * 0.7 + d.phase) * 0.12;
            m.rotation.x = t * d.spin.x;
            m.rotation.y = t * d.spin.y;
          });

          renderer.render(scene, camera);
        };

        const loop = () => {
          frame();
          raf = requestAnimationFrame(loop);
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
