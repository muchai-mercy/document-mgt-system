import { combineReducers } from "redux";
import documents from "./documentsReducer";
import user from "./usersReducer";
import login from "./loginReducer";
import pages from "./pagesReducer";

const rootReducer = combineReducers({
  documents,
  user,
  login,
  pages
});

export default rootReducer;
