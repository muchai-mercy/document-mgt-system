import { combineReducers } from "redux";
import document from "./documentsReducer";

const rootReducer = combineReducers({
  document
});

export default rootReducer;
