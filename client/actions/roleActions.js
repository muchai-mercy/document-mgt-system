import { ALL_ROLES_SUCCESS, POST_ROLE_SUCCESS, UPDATE_ROLE_SUCCESS,
  DELETE_ROLE_SUCCESS, SEARCH_ROLE_SUCCESS, PAGINATE_ROLES_SUCCESS } from "./actionTypes";
import { postEndpoint, getEndpoint, putEndpoint, deleteEndpoint } from "../api/consumeApi";

export function allRolesSuccess(roles) {
  return { type: ALL_ROLES_SUCCESS, roles };
}

export function postRoleSuccess(roles) {
  return { type: POST_ROLE_SUCCESS, roles };
}
export function updateRoleSuccess(roles) {
  return { type: UPDATE_ROLE_SUCCESS, roles };
}
export function deleteRoleSuccess(roles) {
  return { type: DELETE_ROLE_SUCCESS, roles };
}
export function searchRoleSuccess(pages) {
  return { type: SEARCH_ROLE_SUCCESS, pages};
}
export function paginateRolesSuccess(pages) {
  return { type: PAGINATE_ROLES_SUCCESS, pages};
}

const token = localStorage.getItem('jwt');

export function allRoles() {
  return (dispatch) => {
    getEndpoint(`/api/roles/`)
      .set('access-token', token)
      .end((err, res) => dispatch(allRolesSuccess(res.body)
      ));
  };
}
export function paginateRoles(limit = 2, offset = 0) {
  return (dispatch) => {
    getEndpoint(`/api/roles/?limit=${limit}&offset=${offset}`)
      .set('access-token', token)
      .end((err, res) => dispatch(paginateRolesSuccess(res.body)
      ));
  };
}
export function postRoles(roles) {
  return (dispatch) => {
    postEndpoint('/api/roles')
      .send(roles)
      .set('access-token', token)
      .end((err, res) => dispatch(postRoleSuccess({ roles: res.body })
      ));
  };
}

export function updateRoles(roles) {
  return (dispatch) => {
    putEndpoint(`/api/roles/${roles.id}`)
      .send(roles)
      .set('access-token', token)
      .end((err, res) => dispatch(updateRoleSuccess({ roles: res.body })
      ));
  };
}

export function deleteRole(roles) {
  return (dispatch) => {
    deleteEndpoint(`/api/roles/${roles.id}`)
      .send(roles)
      .set('access-token', token)
      .end((err, res) => dispatch(deleteRoleSuccess(roles)
      ));
  };
}

export function searchRole(role) {
  return (dispatch) => {
    getEndpoint(`/api/search/roles/?q=${role}`)
      .set('access-token', token)
      .end((err, res) => dispatch(searchRoleSuccess(res.body)
      ));
  };
}
