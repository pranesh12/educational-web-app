import React from "react";

const Cards = ({ filterData }) => {
  console.log(filterData);
  return (
    <>
      {filterData.map((data) => {
        return (
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              {data.data.map((item) => {
                return <img src={item.image} className="card-img-top" alt="..." />;
              })}
              <div className="card-body">
                <h5 className="card-title">{data.subType}</h5>
                <a className="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
