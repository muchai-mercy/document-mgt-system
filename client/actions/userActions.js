import toastr from "toastr";
import { ALL_USERS_SUCCESS, POST_USERS_SUCCESS, UPDATE_USERS_SUCCESS,
  DELETE_USERS_SUCCESS, SEARCH_USERS_SUCCESS, PAGINATE_USERS_SUCCESS } from "./actionTypes";
import { postEndpoint, getEndpoint, putEndpoint, deleteEndpoint } from "../api/consumeApi";

export const allUsersSuccess = (users) => {
  return { type: ALL_USERS_SUCCESS, users };
};

export const postUsersSuccess = (user) => {
  return { type: POST_USERS_SUCCESS, user };
};
export const updateUsersSuccess = (user) => {
  return { type: UPDATE_USERS_SUCCESS, user };
};
export const deleteUsersSuccess = (user) => {
  return { type: DELETE_USERS_SUCCESS, user };
};
export const searchUsersSuccess = (users) => {
  return { type: SEARCH_USERS_SUCCESS, users};
};
export const paginateUsersSuccess = (pages) => {
  return { type: PAGINATE_USERS_SUCCESS, pages};
};

const token = localStorage.getItem('jwt');

export const allUsers = () => {
  return (dispatch) => {
    getEndpoint(`/api/users/`)
      .set('access-token', token)
      .end((err, res) => dispatch(allUsersSuccess(res.body)
      ));
  };
};

export const paginateUsers = (limit = 5, offset = 1) => {
  return (dispatch) => {
    getEndpoint(`/api/users/?limit=${limit}&offset=${offset}`)
      .set('access-token', token)
      .end((err, res) => dispatch(paginateUsersSuccess(res.body)
      ));
  };
};

export const postUsers = (users) => {
  return (dispatch) => {
    postEndpoint('/api/users')
      .send(users)
      .set('access-token', token)
      .end((err, res) => { toastr.success(res.body.message);
        dispatch(postUsersSuccess({ users: res.body })
      );
    });
  };
};

export const updateUsers = (users) => {
  return (dispatch) => {
    putEndpoint(`/api/users/${users.id}`)
      .send(users)
      .set('access-token', token)
      .end((err, res) => { toastr.success(res.body.message);
        dispatch(updateUsersSuccess({ users: res.body })
      );
      });
  };
};

export const deleteUsers = (users) => {
  return (dispatch) => {
    deleteEndpoint(`/api/users/${users.id}`)
      .send(users)
      .set('access-token', token)
      .end((err, res) => dispatch(deleteUsersSuccess(users)
      ));
  };
};

export const searchUsers = (username) => {
  return (dispatch) => {
    getEndpoint(`/api/search/users/?q=${username}`)
      .set('access-token', token)
      .end((err, res) => dispatch(searchUsersSuccess(res.body)
      ));
  };
};
