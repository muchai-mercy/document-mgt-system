import * as types from '../actions/actionTypes';

export default function documentsReducer(state = [], action) {
  switch (action.type) {
    case types.ALL_DOCUMENTS_SUCCESS:
      return action.documents;
    case types.PAGINATE_DOCUMENTS_SUCCESS:
    return action.pages;
    case types.POST_DOCUMENTS_SUCCESS:
      return [...state,
      Object.assign({}, action.documents)
      ];
    case types.UPDATE_DOCUMENTS_SUCCESS:
      return [...state.filter(document => document.id !== action.document.id),
      Object.assign({}, action.documents)
      ];
    case types.DELETE_DOCUMENTS_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfDocToDelete = state.findIndex(document => {
        return document.id == action.document.id;
      });
      newState.splice(indexOfDocToDelete, 1);
      return newState;
    }
    case types.SEARCH_DOCUMENTS_SUCCESS:
      return action.documents;
    case types.PUBLIC_DOCUMENTS_SUCCESS:
      return action.documents;
    default:
      return state;
  }
}
