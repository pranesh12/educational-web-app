import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_FAILED,
} from "../../actionType/actionType";
import { url } from "../../api/api";

export const registerUser = (registerData) => async (dispatch) => {
  dispatch({ type: REGISTER_USER });
  try {
    const res = await axios.post(url + `register`, registerData);
    console.log(res.data);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILED, payload: error });
  }
};

export const loginUser = (logindata) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });
  try {
    const res = await axios.post(url + `login`, logindata);
    console.log(res.data);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILED, payload: error });
  }
};

export const logoutUser = () => (dispatch, getState) => {
  localStorage.removeItem("currentUser");
  window.location = "/";
};
