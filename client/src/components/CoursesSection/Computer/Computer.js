import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Cards/Cards";

const Computer = () => {
  const educationDataState = useSelector((state) => state.eudcationReducer);
  const { fetchDAta } = educationDataState;
  const computerData = fetchDAta?.filter((data) => data.type === "computer");
  return (
    <div>
      <h2>Computer Section</h2>
      <div className="row">
        <Cards filterData={computerData} />
      </div>
    </div>
  );
};

export default Computer;
