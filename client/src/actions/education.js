import {
  FETCH_EDUCATIONAL_DATA,
  FETCH_EDUCATIONAL_DATA_SUCCESS,
  FETCH_EDUCATIONAL_DATA_FAILED,
  FETCH_ALL_TEACHERS,
  FETCH_ALL_TEACHERS_SUCCESS,
  FETCH_ALL_TEACHERS_FAILED,
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
