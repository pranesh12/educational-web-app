import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id, name } = useParams();
  const fetchDataState = useSelector((state) => state.eudcationReducer.fetchDAta);
  const filterDetails = fetchDataState?.filter((data) => data._id === id);

  return (
    <div>
      {filterDetails?.map((filterData) => {
        return (
          <>
            <h1 className="text-center pt-2 pb-5">{filterData.data[0].header}</h1>
            <div className="d-flex justify-content-center mb-5">
              <iframe
                width="560"
                height="315"
                src={filterData.data[0].vedio}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <p>{filterData.data[0].article}</p>
          </>
        );
      })}
    </div>
  );
};

export default Details;
