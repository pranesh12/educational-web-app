import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Cards/Cards";

const Language = () => {
  const educationDataState = useSelector((state) => state.eudcationReducer);
  const { fetchDAta } = educationDataState;

  const languateData = fetchDAta?.filter((data) => data.type === "language");
  return (
    <div>
      <h2>Learn Languages</h2>
      <div className="row">
        <Cards filterData={languateData} />
      </div>
    </div>
  );
};

export default Language;
