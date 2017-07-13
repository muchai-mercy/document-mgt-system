
import expect from 'expect';
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import * as sessionActions from '../../../../client/actions/sessionActions';
import * as types from '../../../../client/actions/actionTypes';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
  const initialState = [
      {
      token: ",,,..."
      }
    ];
    const loginUser = [
      { token: '......' }
    ];

describe('Session Actions', () => {
  it('login', (done) => {
     nock('http://localhost:3000/');
    const user = { email: 'tests@gmail.com', password: 'tests' };
    const expectedAction = [{ type: types.LOGIN_SUCCESS, body: { loginUser: [{ token: '......' }] } }];
    const store = mockStore({ loginUser: [] }, expectedAction);
     store.dispatch(sessionActions.loginUser()).then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(types.LOGIN_SUCCESS);
        done();
    });
  });
  it('logout', () => {
    const expectedAction = [{ type: types.LOGOUT_SUCCESS,  body: { loginUser: [{ token: '......' }] }}];
    const store = mockStore({ loginUser: [] },expectedAction);
    store.dispatch(sessionActions.logoutUser());
  });
});
