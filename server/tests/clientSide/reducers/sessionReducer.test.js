import expect from 'expect';
import loginReducer from "../../../../client/reducers/loginReducer";
import * as sessionActions from '../../../../client/actions/sessionActions';

describe('Session Reducer', () => {
  it('it should test Login and Logout', () => {
    const initialState = [];
    const login = [];
    const action = sessionActions.loginSuccess(login);
    const newState = loginReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });
   it('it should LOGIN_SUCCESS', () => {
    const initialState = [];
    const action = sessionActions.loginSuccess();
    const newState = loginReducer(initialState);
    expect(newState.length).toEqual(1);
  });
     it('it should LOGOUT_SUCCESS', () => {
    const initialState = [];
    const action = sessionActions.logOut();
    const newState = loginReducer(initialState);
    expect(newState.length).toEqual(1);
  });
});
