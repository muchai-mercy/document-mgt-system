
import expect from 'expect';
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import * as userActions from '../../../client/actions/userActions';
import * as types from '../../../client/actions/actionTypes';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

// Test a sync action
describe('Users Actions', () => {
    describe('post Users success', () => {
        it('should have a create USER success', () => {
            // arrange
            const user = {};
            const expectedAction = {
                type: types.POST_USERS_SUCCESS,
                user
            };
            // action
            const action = userActions.postUsersSuccess(user);
            // assertion
            expect(action).toEqual(expectedAction);
        });
        it('should GET all users success', () => {
            const expectedAction = {
                type: types.ALL_USERS_SUCCESS
            };
        });
        it('should UPDATE a USER success', () => {
            const expectedAction = {
                type: types.UPDATE_USERS_SUCCESS
            };
        });
        it('should DELETE a USER success', () => {
            const expectedAction = {
                type: types.DELETE_USERS_SUCCESS
            };
        });
        it('should SEARCH a USER by title success', () => {
            const expectedAction = {
                type: types.SEARCH_USERS_SUCCESS
            };
        });
    });
});
