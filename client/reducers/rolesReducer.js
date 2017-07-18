import { ALL_ROLES_SUCCESS, POST_ROLE_SUCCESS, UPDATE_ROLE_SUCCESS, DELETE_ROLE_SUCCESS } from '../actions/actionTypes';

export default function rolesReducer(state = [], action) {
  switch (action.type) {
    case ALL_ROLES_SUCCESS:
      return action.roles;
    case POST_ROLE_SUCCESS:
      return [...state,
      Object.assign({}, action.roles)
      ];
    case UPDATE_ROLE_SUCCESS:
      return [...state.filter(roles => roles.id !== action.roles.id),
      Object.assign({}, action.roles)
      ];
    case DELETE_ROLE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfRoleToDelete = state.findIndex(role => {
        return role.id == action.roles.id;
      });
      newState.splice(indexOfRoleToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
