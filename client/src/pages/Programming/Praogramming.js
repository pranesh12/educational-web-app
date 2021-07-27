import React from "react";
import Cards from "../../components/Cards/Cards";

const Praogramming = ({ fetchDAta }) => {
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
