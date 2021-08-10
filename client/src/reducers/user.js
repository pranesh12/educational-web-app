import {
  LOGIN_USER,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_FAILED,
} from "../actionType/actionType";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
