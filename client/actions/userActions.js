import * as types from './actionTypes';
import { postEndpoint, getEndpoint , deleteEndpoint } from "../api/consumeApi";

export function allUsersSuccess(users) {
  return {type: types.ALL_USERS_SUCCESS, users};
}

export function postUsersSuccess(user) {
  return {type: types.POST_USERS_SUCCESS, user};
}
export function updateUsersSuccess(user) {
  return {type: types.UPDATE_USERS_SUCCESS, user};
}
export function deleteUsersSuccess(user) {
  return {type: types.DELETE_USERS_SUCCESS, user};
}
export function allUsers() {
  return (dispatch) => {
    getEndpoint('/api/users')
    .end((err, res) => dispatch(allUsersSuccess(res.body)
    ));
  };
}

export function postUsers(users) {
  return (dispatch) => {
    postEndpoint('/api/users')
    .send(users)
    .end((err, res) => dispatch(postUsersSuccess({ users: res.body })
    ));
  };
}
export function updateUsers(users) {
  return (dispatch) => {
    postEndpoint(`/api/users/${users.id}`)
    .send(users)
    .end((err, res) => dispatch(updateUsersSuccess({ users: res.body })
    ));
  };
}

export function deleteUsers(users) {
  return (dispatch) => {
    deleteEndpoint(`/api/users/${users.id}`)
    .send(users)
    .end((err, res) => dispatch(deleteUsersSuccess(users)
    ));
  };
}
