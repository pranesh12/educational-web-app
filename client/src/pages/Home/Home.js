import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducationalData } from "../../actions/education";
import Computer from "../Computer/Computer";
import Language from "../Language/Language";
import Praogramming from "../Programming/Praogramming";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducationalData());
  }, [dispatch]);

  const educationDataState = useSelector((state) => state.eudcationReducer);
  const { fetchDAta } = educationDataState;

  return (
    <div>
      <Computer fetchDAta={fetchDAta} />
      <Language fetchDAta={fetchDAta} />
      <Praogramming fetchDAta={fetchDAta} />
    </div>
  );
};

export default Home;
