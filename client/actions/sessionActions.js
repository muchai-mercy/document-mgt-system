import * as types from './actionTypes';
import AuthenticateApi from "../api/authenticateApi";


export function loginSuccess() {
  return {type: types.LOGIN_SUCCESS};
}

export function loginUser(credentials) {  
  return function(dispatch) {
    return AuthenticateApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
