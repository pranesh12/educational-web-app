import {
  FETCH_EDUCATIONAL_DATA,
  FETCH_EDUCATIONAL_DATA_SUCCESS,
  FETCH_EDUCATIONAL_DATA_FAILED,
  FETCH_ALL_TEACHERS,
  FETCH_ALL_TEACHERS_SUCCESS,
  FETCH_ALL_TEACHERS_FAILED,
  Add_EDUCATION_DATA,
  Add_EDUCATION_DATA_SUCCESS,
  Add_EDUCATION_DATA_FAILED,
  DELETE_EDUCATION_DATA,
  DELETE_EDUCATION_DATA_FAILED,
  DELETE_EDUCATION_DATA_SUCCESS,
  FIND_DATA_BYID,
  FIND_DATA_BYID_SUCCESS,
  FIND_DATA_BYID_FAILED,
  UPDATE_COURSE_DATA,
  UPDATE_COURSE_DATA_SUCCESS,
  UPDATE_COURSE_DATA_FAILED,
} from "../actionType/actionType";
import { url } from "../api/api";
import axios from "axios";

export const getEducationalData = () => async (dispatch) => {
  dispatch({ type: FETCH_EDUCATIONAL_DATA });
  try {
    const res = await axios.get(url + `info`);
    dispatch({ type: FETCH_EDUCATIONAL_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_EDUCATIONAL_DATA_FAILED, payload: error });
  }
};

export const getTeachers = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_TEACHERS });
  try {
    const res = await axios.get(url + `teachers`);
    console.log(res.data);
    dispatch({ type: FETCH_ALL_TEACHERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_TEACHERS_FAILED });
  }
};

export const addEducationData = (data) => async (dispatch) => {
  dispatch({ type: Add_EDUCATION_DATA });
  try {
    const res = await axios.post(url + `addcourse`, data);
    dispatch({ type: Add_EDUCATION_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: Add_EDUCATION_DATA_FAILED, payload: error });
  }
};

export const deleteEducationData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_EDUCATION_DATA });
  try {
    const res = await axios.delete(url + `removecourse?id=${id}`);
    dispatch({ type: DELETE_EDUCATION_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DELETE_EDUCATION_DATA_FAILED, payload: error });
  }
};

export const findDataByid = (id) => async (dispatch) => {
  dispatch({ type: FIND_DATA_BYID });
  try {
    const res = await axios.get(url + `getCourse?id=${id}`);
    dispatch({ type: FIND_DATA_BYID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FIND_DATA_BYID_FAILED, payload: error });
  }
};

export const updateCourse = (id, newData) => async (dispatch) => {
  dispatch({ type: UPDATE_COURSE_DATA });
  const updataedData = {
    id,
    newData,
  };

  try {
    const res = await axios.put(url + `update`, updataedData);
    dispatch({ type: UPDATE_COURSE_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UPDATE_COURSE_DATA_FAILED, payload: error });
  }
};
