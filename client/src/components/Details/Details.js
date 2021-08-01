import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id, name } = useParams();
  const fetchDataState = useSelector((state) => state.eudcationReducer.fetchDAta);
  const filterDetails = fetchDataState?.filter((data) => data._id === id);

  console.log(filterDetails);

  return (
    <div>
      {filterDetails?.map((filterData) => {
        return (
          <>
            <img src={filterData.data[0].image} alt={filterData.data[0].header} />

            <h1>{filterData.data[0].header}</h1>
            <iframe src={filterData.data[0].vedio} frameborder="0"></iframe>
            <p>{filterData.data[0].article}</p>
          </>
        );
      })}
    </div>
  );
};

export default Details;
