import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id, name } = useParams();

  return (
    <div>
      <h1>{name}</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Details;
