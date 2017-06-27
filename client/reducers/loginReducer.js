import * as types from '../actions/actionTypes';
import { browserHistory } from "react-router";

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return  Object.assign({}, state, action.token);
    default:
      return state;
  }
}
