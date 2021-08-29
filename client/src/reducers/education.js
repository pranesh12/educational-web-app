import {
  FETCH_EDUCATIONAL_DATA_FAILED,
  FETCH_EDUCATIONAL_DATA_SUCCESS,
  FETCH_EDUCATIONAL_DATA,
  FETCH_ALL_TEACHERS,
  FETCH_ALL_TEACHERS_SUCCESS,
  FETCH_ALL_TEACHERS_FAILED,
  Add_EDUCATION_DATA,
  Add_EDUCATION_DATA_FAILED,
  Add_EDUCATION_DATA_SUCCESS,
  DELETE_EDUCATION_DATA,
  DELETE_EDUCATION_DATA_SUCCESS,
  DELETE_EDUCATION_DATA_FAILED,
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
    case Add_EDUCATION_DATA:
      return {
        ...state,
        loading: true,
      };
    case Add_EDUCATION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Add_EDUCATION_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_EDUCATION_DATA:
      return {
        ...state,
        loading: true,
      };
    case DELETE_EDUCATION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_EDUCATION_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
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
