import * as types from '../actions/actionTypes';
import { browserHistory } from "react-router";

export default function loginReducer(state = {}, action) {
  switch (action.type) {
      case types.LOGIN_SUCCESS:
      return Object.assign({}, state, action.token);
    case types.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
