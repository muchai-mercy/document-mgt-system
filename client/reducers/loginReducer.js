import { LOGIN_SUCCESS, LOGOUT_SUCCESS }  from '../actions/actionTypes';
import { browserHistory } from "react-router";

export default function loginReducer(state = {}, action) {
  switch (action.type) {
      case LOGIN_SUCCESS:
      return Object.assign({}, state, action.token);
    case LOGOUT_SUCCESS:
    action.token = [];
      return action.token;
    default:
      return state;
  }
}
