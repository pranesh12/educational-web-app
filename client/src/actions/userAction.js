import {
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGIN_USER_FAILED,
} from "../actionType/actionType";
import axios from "axios";
import { url } from "../api/api";

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const res = await axios.post(url + `register`, registerData);
    dispatch({ type: REGISTER_USER, payload: res.result.data });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILED, payload: error });
  }
};

export const loginUser = (logindata) => async (dispatch) => {
  try {
    const res = await axios.post(url + `login`, logindata);
    dispatch({ type: LOGIN_USER, payload: res.result.data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILED, payload: error });
  }
};
