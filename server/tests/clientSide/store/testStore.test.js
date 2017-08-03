import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import rootReducer from '../../../../client//reducers/index';
import * as documentActions from '../../../../client/actions/documentActions';
import * as usersActions from '../../../../client/actions/userActions';

const mockStore = configureMockStore([thunk]);

describe('Store', () => {
  it('Should handle document actions', () => {
    // arrange
    const document = {
      content: 'Women'
    };
    const store = mockStore(document);

    const expectedActions = { type: 'LOAD_DOCUMENTS_SUCCESS', document };

    // act
    const action = documentActions.allDocumentsSuccess(document);
    store.dispatch(action);
    expect(store.getState()).toEqual(document);
  });
    it('Should handle user actions', () => {
    // arrange
    const user = {
      username: 'human'
    };
    const store = mockStore(user);

    const expectedActions = { type: 'LOAD_USERS_SUCCESS', user };

    // act
    const action = usersActions.allUsersSuccess(user);
    store.dispatch(action);
    expect(store.getState()).toEqual(user);
  });
});
