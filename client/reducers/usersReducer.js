import { ALL_USERS_SUCCESS, POST_USERS_SUCCESS, UPDATE_USERS_SUCCESS, DELETE_USERS_SUCCESS, SIGNUP_USER } from '../actions/actionTypes';

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case ALL_USERS_SUCCESS:
      return action.users;
    case POST_USERS_SUCCESS:
      return [...state,
      Object.assign({}, action.users)
      ];
    case SIGNUP_USER:
      return [...state,
      Object.assign({}, action.users)
      ];
    case UPDATE_USERS_SUCCESS:
      return [...state.filter(user => user.id !== action.user.id),
      Object.assign({}, action.users)
      ];
    case DELETE_USERS_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfUserToDelete = state.findIndex(user => {
        return user.id == action.user.id;
      });
      newState.splice(indexOfUserToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
