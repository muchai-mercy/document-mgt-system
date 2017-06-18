import { combineReducers } from "redux";
import document from "./documentsReducer";
import user from "./usersReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({
  document,
  user,
  login
});

export default rootReducer;
