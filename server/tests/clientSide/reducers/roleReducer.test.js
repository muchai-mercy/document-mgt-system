import expect from "expect";
import rolesReducer from "../../../../client/reducers/rolesReducer";
import * as roleActions from '../../../../client/actions/roleActions';

describe('Roles Reducer', () => {
  it('should create role when passed POST_ROLE_SUCCESS', () => {
    // arrange
    const initialState = [
      { role: 'Admin' },
      { role: 'User' }
    ];
    const newRole = { role: 'Developer' };
    const action = roleActions.postRoleSuccess(newRole);
    // action
    const newState = rolesReducer(initialState, action);

    // assertion
    expect(newState.length).toEqual(3);
    expect(newState[0].role).toEqual('Admin');
    expect(newState[1].role).toEqual('User');

  });
  it('should update role when passed UPDATE_ROLES_SUCCESS', () => {
    // arrange
    const initialState = [
      { id: "3", role: 'Developer' },
      { id: '2', role: 'User' },

    ];
    const roles = { id: '3', role: 'Developers' };
    const action = roleActions.updateRoleSuccess(roles);

    // action
    const newState = rolesReducer(initialState, action);
    const updatedRole = newState.find(action => action.id === roles.id);
    const untouchedRole = newState.find(action => action.id === '3');

    // assertion
    expect(newState.length).toEqual(2);
  });
  
  it('it should get all roles when passed LOAD_ROLES_SUCCESS', () => {
    const initialState = [];
    const roles = { id: '3', role: 'Developers' };

    const action = roleActions.allRolesSuccess(roles);
    const newState = rolesReducer(initialState, action);
    expect(newState).toEqual(roles);
  });

  it('it should delete a user when passed DELETE_USER_SUCCESS', () => {
    const initialState = [];
    const roles = { id: '3', role: 'Developers' };

    const action = roleActions.deleteRoleSuccess(roles);
    const newState = rolesReducer(initialState, action);
    expect(newState.length).toEqual(0);
  });
});
