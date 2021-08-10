import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEducationalData } from "../../actions/education";
import Computer from "../Computer/Computer";
import Language from "../Language/Language";
import Praogramming from "../Programming/Praogramming";

const Allcourse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationalData());
  }, [dispatch]);
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
