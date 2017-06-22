import { ALL_USERS_SUCCESS, POST_USERS_SUCCESS, UPDATE_USERS_SUCCESS, DELETE_USERS_SUCCESS, SEARCH_USERS_SUCCESS } from "./actionTypes";
import { postEndpoint, getEndpoint, putEndpoint, deleteEndpoint } from "../api/consumeApi";

export function allUsersSuccess(users) {
  return { type: ALL_USERS_SUCCESS, users };
}

export function postUsersSuccess(user) {
  return { type: POST_USERS_SUCCESS, user };
}
export function updateUsersSuccess(user) {
  return { type: UPDATE_USERS_SUCCESS, user };
}
export function deleteUsersSuccess(user) {
  return { type: DELETE_USERS_SUCCESS, user };
}
export function searchUsersSuccess(username, email) {
  return { type: SEARCH_USERS_SUCCESS, username, email };
}

const token = localStorage.getItem('jwt');

export function allUsers() {
  return (dispatch) => {
    getEndpoint('/api/users')
      .set('access-token', token)
      .end((err, res) => dispatch(allUsersSuccess(res.body)
      ));
  };
}

export function postUsers(users) {
  return (dispatch) => {
    postEndpoint('/api/users')
      .send(users)
      .set('access-token', token)
      .end((err, res) => dispatch(postUsersSuccess({ users: res.body })
      ));
  };
}
export function updateUsers(users) {
  return (dispatch) => {
    putEndpoint(`/api/users/${users.id}`)
      .send(users)
      .set('access-token', token)
      .end((err, res) => dispatch(updateUsersSuccess({ users: res.body })
      ));
  };
}

export function deleteUsers(users) {
  return (dispatch) => {
    deleteEndpoint(`/api/users/${users.id}`)
      .send(users)
      .set('access-token', token)
      .end((err, res) => dispatch(deleteUsersSuccess(users)
      ));
  };
}

export function searchUsers(username, email) {
  return (dispatch) => {
    getEndpoint(`/api/search/users/?q=${username}&q=${email}`)
      .set('access-token', token)
      .end((err, res) => dispatch(searchUsersSuccess(res.body)
      ));
  };
}
