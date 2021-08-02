import React from "react";
import { useSelector } from "react-redux";
import "./BestTeaches.css";
const BestTeachers = () => {
  const techersStae = useSelector((state) => state.teachersReducer.teachers);
  console.log(techersStae);
  return (
    <div className="bestTeachers">
      <div className="container ">
        <h1 className="text-center pt-5">Meet Our popular Teachers</h1>
      </div>
    </div>
  );
};

export default BestTeachers;
