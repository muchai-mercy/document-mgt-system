import { ALL_DOCUMENTS_SUCCESS, POST_DOCUMENTS_SUCCESS, UPDATE_DOCUMENTS_SUCCESS,
   DELETE_DOCUMENTS_SUCCESS, PUBLIC_DOCUMENTS_SUCCESS } from '../actions/actionTypes';

export default function documentsReducer(state = [], action) {
  switch (action.type) {
    case ALL_DOCUMENTS_SUCCESS:
      return action.documents;
    case POST_DOCUMENTS_SUCCESS:
      return [...state,
      Object.assign({}, action.documents)
      ];
    case UPDATE_DOCUMENTS_SUCCESS:
      return [...state.filter(document => document.id !== action.document.id),
      Object.assign({}, action.documents)
      ];
    case DELETE_DOCUMENTS_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfDocToDelete = state.findIndex(document => {
        return document.id == action.document.id;
      });
      newState.splice(indexOfDocToDelete, 1);
      return newState;
    }
    case PUBLIC_DOCUMENTS_SUCCESS:
      return action.documents;
    default:
      return state;
  }
}
