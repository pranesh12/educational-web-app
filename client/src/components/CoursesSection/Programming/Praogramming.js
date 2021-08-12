import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../../Cards/Cards";

const Praogramming = () => {
  const educationDataState = useSelector((state) => state.eudcationReducer);
  const { fetchDAta } = educationDataState;
  const programmingData = fetchDAta?.filter((data) => data.type === "programming");
  return (
    <div>
      <h2>Programming Languages</h2>
      <div className="row">
        <Cards filterData={programmingData} />
      </div>
    </div>
  );
};

export default Praogramming;
