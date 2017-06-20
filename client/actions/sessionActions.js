import { LOGIN_SUCCESS } from "./actionTypes";
import { postEndpoint } from "../api/consumeApi";
// import AuthenticateApi from "../api/authenticateApi";


export function loginSuccess() {
  return {type: LOGIN_SUCCESS};
}

export function loginUser(credentials) {  
  return function(dispatch) {
    postEndpoint('/api/users/login')
    .send(credentials)
    .end((err, res) => {
      if (!err) {
        localStorage.setItem('jwt', res.body.token);
        return dispatch(loginSuccess({ token: res.body.token }));
      }});
  };
}
