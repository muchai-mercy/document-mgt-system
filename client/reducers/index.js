import { combineReducers } from "redux";
import documents from "./documentsReducer";
import user from "./usersReducer";
import credentials from "./loginReducer";
import pages from "./pagesReducer";
import roles from "./rolesReducer";

const rootReducer = combineReducers({
  documents,
  user,
  credentials,
  pages,
  roles
});

export default rootReducer;
