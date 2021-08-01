import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";

const Praogramming = () => {
  const educationDataState = useSelector((state) => state.eudcationReducer);
  const { fetchDAta } = educationDataState;
  const programmingData = fetchDAta?.filter((data) => data.type === "programming");
  return (
    <div>
      <h2>Languages</h2>
      <div className="row">
        <Cards filterData={programmingData} />
      </div>
    </div>
  );
};

export default Praogramming;
