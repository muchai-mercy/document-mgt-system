import request from "superagent";
import { LOGIN_SUCCESS, SIGNUP_USER, LOGOUT_SUCCESS } from "./actionTypes";
import { postEndpoint } from "../api/consumeApi";

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, token };
};
export const logOut = res => ({ type: LOGOUT_SUCCESS, token: res.token });
export const signUpUser = user => ({ type: SIGNUP_USER, user });

export function loginUser(credentials) {
  return function (dispatch) {
    postEndpoint('/api/users/login')
      .send(credentials)
      .end((err, res) => {
        if (!err) {
          localStorage.setItem('jwt', res.body.token);
          localStorage.setItem('username', res.body.username);
          localStorage.setItem('userId', res.body.id);
          localStorage.setItem('role', res.body.role);
          return dispatch(loginSuccess({ token: res.body.token }));
        }
      });
  };
}
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwt');
  return dispatch(logOut({}));
};
export const userSignup = userInfo => (dispatch) => {
  dispatch(signUpUser(userInfo));
  return (
    request
      .post('/api/users')
      .send(userInfo)
      .then((res) => {
        localStorage.setItem('jwt', res.body.token);
        dispatch(loginSuccess({ token: res.body.token }));
      })
      .catch((error) => {
        "Login failed";
      })
  );
};
