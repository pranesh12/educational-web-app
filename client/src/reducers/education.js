import {
  FETCH_EDUCATIONAL_DATA_FAILED,
  FETCH_EDUCATIONAL_DATA_SUCCESS,
  FETCH_EDUCATIONAL_DATA,
  FETCH_ALL_TEACHERS,
  FETCH_ALL_TEACHERS_SUCCESS,
  FETCH_ALL_TEACHERS_FAILED,
} from "../actionType/actionType";

export const eudcationReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EDUCATIONAL_DATA:
      return {
        ...state,
      };
    case FETCH_EDUCATIONAL_DATA_SUCCESS:
      return {
        ...state,
        fetchDAta: action.payload,
      };
    case FETCH_EDUCATIONAL_DATA_FAILED:
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

export const teachersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_TEACHERS:
      return {
        ...state,
      };
    case FETCH_ALL_TEACHERS_SUCCESS:
      return {
        ...state,
        teachers: action.payload,
      };
    case FETCH_ALL_TEACHERS_FAILED:
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