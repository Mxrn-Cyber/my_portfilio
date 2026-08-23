import React from "react";
import Typewriter from "typewriter-effect";

const Type = ({ strings }) => {
  return (
    <Typewriter
      options={{
        strings: strings && strings.length ? strings : ["Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
