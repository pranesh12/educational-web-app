import {
  FETCH_EDUCATIONAL_DATA_FAILED,
  FETCH_EDUCATIONAL_DATA_SUCCESS,
  FETCH_EDUCATIONAL_DATA,
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
