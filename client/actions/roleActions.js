import toastr from "toastr";
import { ALL_ROLES_SUCCESS, POST_ROLE_SUCCESS, UPDATE_ROLE_SUCCESS,
  DELETE_ROLE_SUCCESS, SEARCH_ROLE_SUCCESS, PAGINATE_ROLES_SUCCESS } from "./actionTypes";
import { postEndpoint, getEndpoint, putEndpoint, deleteEndpoint } from "../api/consumeApi";

export const allRolesSuccess = (roles) => {
  return { type: ALL_ROLES_SUCCESS, roles };
};

export const postRoleSuccess = (roles) => {
  return { type: POST_ROLE_SUCCESS, roles };
};
export const updateRoleSuccess = (roles) => {
  return { type: UPDATE_ROLE_SUCCESS, roles };
};
export const deleteRoleSuccess = (roles) => {
  return { type: DELETE_ROLE_SUCCESS, roles };
};
export const searchRoleSuccess = (pages) => {
  return { type: SEARCH_ROLE_SUCCESS, pages};
};
export const paginateRolesSuccess = (pages) => {
  return { type: PAGINATE_ROLES_SUCCESS, pages};
};

const token = localStorage.getItem('jwt');

export const allRoles = () => {
  return (dispatch) => {
    getEndpoint(`/api/roles/`)
      .set('access-token', token)
      .end((err, res) => dispatch(allRolesSuccess(res.body)
      ));
  };
};

export const paginateRoles = (limit = 2, offset = 0) => {
  return (dispatch) => {
    getEndpoint(`/api/roles/?limit=${limit}&offset=${offset}`)
      .set('access-token', token)
      .end((err, res) => dispatch(paginateRolesSuccess(res.body)
      ));
  };
};

export const postRoles = (roles) => {
  return (dispatch) => {
    postEndpoint('/api/roles')
      .send(roles)
      .set('access-token', token)
      .end((err, res) => { toastr.success(res.body.message);
        dispatch(postRoleSuccess({ roles: res.body })
      );
    });
  };
};

export const updateRoles = (roles) => {
  return (dispatch) => {
    putEndpoint(`/api/roles/${roles.id}`)
      .send(roles)
      .set('access-token', token)
      .end((err, res) => { toastr.success(res.body.message);
        dispatch(updateRoleSuccess({ roles: res.body })
      );
      });
  };
};

export const deleteRole = (roles) => {
  return (dispatch) => {
    deleteEndpoint(`/api/roles/${roles.id}`)
      .send(roles)
      .set('access-token', token)
      .end((err, res) => dispatch(deleteRoleSuccess(roles)
      ));
  };
};

export const searchRole = (role) => {
  return (dispatch) => {
    getEndpoint(`/api/search/roles/?q=${role}`)
      .set('access-token', token)
      .end((err, res) => dispatch(searchRoleSuccess(res.body)
      ));
  };
};
