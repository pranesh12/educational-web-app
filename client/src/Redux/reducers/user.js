import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../../actionType/actionType";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        currentUser: action.payload,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        loginLoading: false,
        error: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        registerLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        registerLoading: false,
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        registerLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
