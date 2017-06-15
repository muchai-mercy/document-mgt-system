import * as types from '../actions/actionTypes';

export default function documentsReducer(state = [], action) {
  switch (action.type) {
    case types.ALL_DOCUMENTS_SUCCESS:
      return action.documents;
    case types.POST_DOCUMENTS_SUCCESS:
      return [...state,
      Object.assign({}, action.documents)
      ];
    case types.UPDATE_DOCUMENTS_SUCCESS:
      return [...state.filter(document => document.id !== action.document.id),
      Object.assign({}, action.documents)
      ];
    default:
      return state;
  }
}
