import React, { useEffect } from "react";
import Dashboard from "./DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteEducationData,
  getEducationalData,
} from "../../Redux/actions/education";

const Admin = () => {
  const dispatch = useDispatch();
  const educationalData = useSelector((state) => state.eudcationReducer.fetchDAta);

  useEffect(() => {
    dispatch(getEducationalData());
  }, [dispatch]);

  const deleteData = (id) => {
    dispatch(deleteEducationData(id));
  };

  return (
    <div className="row">
      <div className="d-flex align-items-stretch">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div id="content" className="p-4 p-md-5 pt-5 col-md-10">
          <h1>Admin home page</h1>
          <table class="table">
            <thead>
              <tr>
                <th>Subject Type</th>
                <th>Subject Name</th>
                <th>Created By</th>
                <th>Data</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {educationalData?.map((ed) => {
                return (
                  <>
                    <tr>
                      <td>{ed.type}</td>
                      <td>{ed.subType}</td>
                      <td>{ed.createdBy}</td>
                      <td>{ed.data.article.slice(0, 50)}</td>
                      <td>
                        <div className="d-flex justify-content-around">
                          <div>
                            <Link to={`/admin/edit/${ed._id}`}>
                              <i className="far fa-edit editIcon"></i>
                            </Link>
                          </div>
                          <div>
                            <i
                              onClick={() => deleteData(ed._id)}
                              className="fas fa-trash-alt deleteIcon"
                            ></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
