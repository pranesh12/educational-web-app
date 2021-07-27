import React from "react";
import Cards from "../../components/Cards/Cards";

const Language = ({ fetchDAta }) => {
  const languateData = fetchDAta?.filter((data) => data.type === "language");
  return (
    <div>
      <h2>Languages</h2>
      <div className="row">
        <Cards filterData={languateData} />
      </div>
    </div>
  );
};

export default Language;
