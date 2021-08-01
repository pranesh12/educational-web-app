import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducationalData } from "../../actions/education";
import Banner from "../Banner/Banner";
import Computer from "../Computer/Computer";
import Language from "../Language/Language";
import Praogramming from "../Programming/Praogramming";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationalData());
  }, [dispatch]);

  return (
    <div>
      <Banner />
      <Computer />
      <Language />
      <Praogramming />
    </div>
  );
};

export default Home;
