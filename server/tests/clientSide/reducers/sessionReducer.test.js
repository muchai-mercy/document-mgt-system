import expect from 'expect';
import loginReducer from "../../../../client/reducers/loginReducer";
import * as sessionActions from '../../../../client/actions/sessionActions';

describe('Session Reducer', () => {
     it('it should LOGOUT_SUCCESS', () => {
    const initialState = [
      {token: "fghjkl;"}
    ];
    const action = sessionActions.logOut();
    const newState = loginReducer(initialState, action);
    expect(newState.length).toEqual(0);
  });
});
