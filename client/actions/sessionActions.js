import request from "superagent";
import toastr from 'toastr';
import { LOGIN_SUCCESS, SIGNUP_USER, LOGOUT_SUCCESS } from "./actionTypes";
import { postEndpoint } from "../api/consumeApi";

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, token };
};
export const logOut = token => ({ type: LOGOUT_SUCCESS, token });
export const signUpUser = user => ({ type: SIGNUP_USER, user });

export const loginUser = (credentials) => {
  return (dispatch) => {
    postEndpoint('/api/users/login')
      .send(credentials)
      .end((err, res) => {
        toastr.success(res.body.message);
        if (!err) {
          localStorage.setItem('jwt', res.body.token);
          localStorage.setItem('username', res.body.username);
          localStorage.setItem('userId', res.body.id);
          localStorage.setItem('role', res.body.role);
          return dispatch(loginSuccess(res.body));

        }
      });
  };
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwt');
  return dispatch(logOut({}));
};

export const userSignup = (users) => {
  return (dispatch) => {
    postEndpoint('/api/users')
      .send(users)
      .end((err, res) => { toastr.success(res.body.message)
      dispatch(signUpUser({ users: res.body }) 
      );
      });
  };
};
