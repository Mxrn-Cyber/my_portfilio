import React from "react";
import Particles from "react-tsparticles";
import { isLitePerf } from "../perf";

function Particle() {
  // Skipped on weak GPUs — a full-screen animated canvas is the most
  // expensive thing on the page there.
  if (isLitePerf()) return null;
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: false,
        fpsLimit: 30,
      }}
    />
  );
}

export default Particle;
