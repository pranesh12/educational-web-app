import React from "react";
import Computer from "../Computer/Computer";
import Language from "../Language/Language";
import Praogramming from "../Programming/Praogramming";

const Allcourse = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <Computer />
        <Language />
        <Praogramming />
      </div>
    </>
  );
};

export default Allcourse;
