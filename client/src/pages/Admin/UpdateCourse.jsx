import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch } from "react-redux";
import { findDataByid } from "../../actions/education";

const UpdateCourse = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findDataByid(id));
  }, [id, dispatch]);
  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h1>Update course course</h1>
          <h3>{id}</h3>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
