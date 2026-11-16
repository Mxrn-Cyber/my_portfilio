import React from "react";

// Static star field drawn with CSS gradients. Replaces the old animated
// particle canvas, which repainted the whole screen every frame.
function Particle() {
  return <div id="tsparticles" className="star-field" aria-hidden="true" />;
}

export default Particle;
