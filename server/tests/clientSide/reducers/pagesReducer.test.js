import expect from "expect";
import pagesReducer from "../../../../client/reducers/pagesReducer";
import * as documentsActions from '../../../../client/actions/documentActions';
import * as userActions from '../../../../client/actions/userActions';
import * as roleActions from '../../../../client/actions/roleActions';

describe('Pages Reducer', () => {
  // search Actions
  it('it should search a document when passed SEARCH_DOCUMENT_SUCCESS', () => {
    const initialState = [];
    const document = [
      { id: '1', title: 'Men', content: 'Will be men', }
    ];
    const action = documentsActions.searchDocumentsSuccess(document);
    const newState = pagesReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

  it('it should search a user when passed SEARCH_ROLE_SUCCESS', () => {
    const initialState = [];
    const user = [
      { id: '1', username: 'human' },
    ];
    const action = userActions.searchUsersSuccess(user);
    const newState = pagesReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

  it('it should search a role when passed SEARCH_ROLE_SUCCESS', () => {
    const initialState = [];
    const role = [
      { id: '1', role: 'Admin' },
    ];
    const action = roleActions.searchRoleSuccess(role);
    const newState = pagesReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

  // Pagination actions

  it('it should paginate documents page when passed PAGINATE_DOCUMENTS_SUCCESS', () => {
    const initialState = [];
    const document = [
      { id: '1', title: 'Men', content: 'Will be men', }
    ];
    const action = documentsActions.paginateDocumentsSuccess(document);
    const newState = pagesReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

  it('it should paginate documents page when passed PAGINATE_USERS_SUCCESS', () => {
    const initialState = [];
    const user = [
      { id: '1', username: 'human' },
    ];
    const action = userActions.paginateUsersSuccess(user);
    const newState = pagesReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

  it('it should paginate documents page when passed PAGINATE_ROLES_SUCCESS', () => {
    const initialState = [];
    const role = [
      { id: '1', role: 'Admin' },
    ];
    const action = roleActions.paginateRolesSuccess(role);
    const newState = pagesReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
});
