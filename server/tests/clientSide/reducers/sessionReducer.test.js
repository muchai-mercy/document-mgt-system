import expect from 'expect';
import loginReducer from "../../../../client/reducers/loginReducer";
import * as sessionActions from '../../../../client/actions/sessionActions';

const login = [{token: '......'}];
describe('Session Reducer', () => {
  
   it('it should LOGIN_SUCCESS', () => {
    const initialState = [];
    const login = [{token: "..."}];
    const action = sessionActions.loginSuccess(login);
    const newState = loginReducer(initialState, action);
    expect(newState).toEqual(action.token);
  });
     it('it should LOGOUT_SUCCESS', () => {
    const initialState = [];
    const action = sessionActions.logOut();
    const newState = loginReducer(initialState);
    expect(newState.length).toEqual(1);
  });
   it('it should SIGNUP_SUCCESS', () => {
    const initialState = [];
    const action = sessionActions.signUpUser(login);
    const newState = loginReducer(initialState);
    expect(newState).toEqual(login);
  });
});
