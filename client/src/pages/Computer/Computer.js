import React from "react";
import Cards from "../../components/Cards/Cards";

const Computer = ({ fetchDAta }) => {
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
