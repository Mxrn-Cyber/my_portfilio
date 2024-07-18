import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "CyberSecurity",
          "Machine Learning",
          "Backend Dev",
          "Mobiles app Dev",
          "DevOp Engineer",
          "Effective Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
