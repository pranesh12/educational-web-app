import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { eudcationReducer } from "./reducers/educationReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducers = combineReducers({
  eudcationReducer: eudcationReducer,
});

const initialReducer = {};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducers,
  initialReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
