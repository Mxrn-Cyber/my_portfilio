// Detects weak/integrated GPUs (e.g. Chrome on Intel Macs) and sets
// <html data-perf="lite">: no particles, solid navbar, lighter 3D scene.
// Override with ?perf=full or ?perf=lite.

const WEAK_GPU = /intel|uhd|iris|hd graphics|swiftshader|llvmpipe|software|mali-4|adreno \(tm\) [34]/i;

function readGpu() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
    if (!gl) return "none";
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    const lose = gl.getExtension("WEBGL_lose_context");
    if (lose) lose.loseContext();
    return String(name || "");
  } catch (e) {
    return "";
  }
}

let cached = null;

export function isLitePerf() {
  if (cached !== null) return cached;
  if (typeof window === "undefined") return (cached = false);
  const q = new URLSearchParams(window.location.search).get("perf");
  if (q === "full") return (cached = false);
  if (q === "lite") return (cached = true);
  const gpu = readGpu();
  cached = gpu === "none" || WEAK_GPU.test(gpu);
  return cached;
}

export function applyPerfMode() {
  if (isLitePerf()) document.documentElement.setAttribute("data-perf", "lite");
}
