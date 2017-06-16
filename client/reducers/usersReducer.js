import * as types from '../actions/actionTypes';
import { browserHistory } from "react-router";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case types.ALL_USERS_SUCCESS:
      return action.users;
    case types.POST_USERS_SUCCESS:
      return [...state,
      Object.assign({}, action.users)
      ];
    case types.UPDATE_USERS_SUCCESS:
      return [...state.filter(user => user.id !== action.user.id),
      Object.assign({}, action.users)
      ];
    case types.DELETE_USERS_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfUserToDelete = state.findIndex(user => {
        return user.id == action.user.id;
      });
      newState.splice(indexOfUserToDelete, 1);
      browserHistory.push('/users');
      return newState;
    }

    default:
      return state;
  }
}
