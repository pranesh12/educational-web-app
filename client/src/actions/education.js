import {
  FETCH_EDUCATIONAL_DATA,
  FETCH_EDUCATIONAL_DATA_SUCCESS,
  FETCH_EDUCATIONAL_DATA_FAILED,
} from "../actionType/actionType";
import { url } from "../api/api";
import axios from "axios";
export const getEducationalData = () => async (dispatch) => {
  dispatch({ type: FETCH_EDUCATIONAL_DATA });

  try {
    const res = await axios.get(url + `info`);
    console.log(res.data);
    dispatch({ type: FETCH_EDUCATIONAL_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_EDUCATIONAL_DATA_FAILED, payload: error });
  }
};
