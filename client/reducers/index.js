import { combineReducers } from "redux";
import documents from "./documentsReducer";
import user from "./usersReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({
  documents,
  user,
  login
});

export default rootReducer;
