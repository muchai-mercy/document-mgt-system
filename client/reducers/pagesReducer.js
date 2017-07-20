import { PAGINATE_DOCUMENTS_SUCCESS, SEARCH_DOCUMENTS_SUCCESS, SEARCH_USERS_SUCCESS, PAGINATE_USERS_SUCCESS, PAGINATE_ROLES_SUCCESS, SEARCH_ROLE_SUCCESS } from '../actions/actionTypes';

export default function pagesReducer(state = [], action) {
  switch (action.type) {
    case PAGINATE_DOCUMENTS_SUCCESS:
      return action.pages;
    case PAGINATE_USERS_SUCCESS:
      return action.pages;
    case PAGINATE_ROLES_SUCCESS:
      return action.pages;
    case SEARCH_DOCUMENTS_SUCCESS:
      return action.pages;
    case SEARCH_USERS_SUCCESS:
      return action.users;
    case SEARCH_ROLE_SUCCESS:
      return action.pages;
    default:
      return state;
  }
}
