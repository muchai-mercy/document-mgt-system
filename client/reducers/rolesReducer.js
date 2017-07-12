import * as types from '../actions/actionTypes';

export default function rolesReducer(state = [], action) {
  switch (action.type) {
    case types.ALL_ROLES_SUCCESS:
      return action.roles;
    case types.POST_ROLE_SUCCESS:
      return [...state,
      Object.assign({}, action.roles)
      ];
    case types.UPDATE_ROLE_SUCCESS:
      return [...state.filter(roles => roles.id !== action.roles.id),
      Object.assign({}, action.roles)
      ];
    case types.DELETE_ROLE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfRoleToDelete = state.findIndex(role => {
        return role.id == action.role.id;
      });
      newState.splice(indexOfRoleToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
