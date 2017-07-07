import expect from "expect";
import usersReducer from "../../../client/reducers/usersReducer";
import * as userActions from '../../../client/actions/userActions';

describe('Users Reducer', () => {
  it('should create user when passed POST_USERS_SUCCESS', () => {
    // arrange
    const initialState = [
      { username: 'human' }
    ];
    const newUser = { username: "manman" };
    const action = userActions.postUsersSuccess(newUser);
    // action
    const newState = usersReducer(initialState, action);

    // assertion
    expect(newState.length).toEqual(2);
    expect(newState[0].username).toEqual('human');
  });
  it('should update user when passed UPDATE_USER_SUCCESS', () => {
    // arrange
    const initialState = [
      { id: '1', username: 'human' },
      { id: '2', title: 'manman' }
    ];

    const user = { id: '2', username: 'womanwoman' };
    const action = userActions.updateUsersSuccess(user);

    // action
    const newState = usersReducer(initialState, action);
    const updatedUser = newState.find(action => action.id === user.id);
    const untouchedDocument = newState.find(action => action.id === '1');

    // assertion
    expect(newState.length).toEqual(2);
  });
});
