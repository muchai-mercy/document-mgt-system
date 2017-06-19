import * as types from './actionTypes';
import { postEndpoint } from "../api/consumeApi";
// import AuthenticateApi from "../api/authenticateApi";


export function loginSuccess() {
  return {type: types.LOGIN_SUCCESS};
}

export function loginUser(credentials) {  
  return function(dispatch) {
    postEndpoint('/api/users/login')
    .send(credentials)
    .end((err, res) => dispatch(loginSuccess()
    ));
  };
}
