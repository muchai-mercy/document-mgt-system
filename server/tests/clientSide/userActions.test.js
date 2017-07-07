
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
describe('Async Actions', () => {
    it('should mock LOAD_USERS_SUCCESS', (done) => {
        nock('http://localhost:3000/')
            .get('/api/users')
            .reply(200, { body: { user: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } });

        const expectedActions = [
            { type: types.ALL_USERS_SUCCESS, body: { USERS: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } }
        ];

        const store = mockStore({ users: [] }, expectedActions, done());
        store.dispatch(userActions.allUsers()).then(() => {
            const actions = store.getActions();
            expect(actions[1].type).toEqual(types.ALL_USERS_SUCCESS);
            done();
        });
    });
});

it('should mock SEARCH_USERS_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .get('/api/search/users?q=hu')
        .reply(200, { body: { user: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } });

    const expectedActions = [
        { type: types.SEARCH_USERS_SUCCESS, body: { USERS: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } }
    ];

    const store = mockStore({ user: [] }, expectedActions, done());
    store.dispatch(userActions.searchUsers()).then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(types.SEARCH_USERS_SUCCESS);
        done();
    });
});

it('should mock POST_USERS_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .post('/api/users')
        .reply(201, { body: { user: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } });

    const expectedActions = [
        { type: types.POST_USERS_SUCCESS, body: { USERS: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } }
    ];

    const store = mockStore({ user: [] }, expectedActions, done());
    store.dispatch(userActions.postUsers()).then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(types.POST_USERS_SUCCESS);
        done();
    });
});
it('should mock DELETE_USER_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .delete(`/api/users/`)
        .reply(200);

    const expectedActions = [
        { type: types.DELETE_USERS_SUCCESS }
    ];

    const store = mockStore({ users: [] }, expectedActions, done());
    store.dispatch(userActions.deleteUsers()).then(() => {
        const actions = store.deleteActions();
        expect(actions[1].type).toEqual(types.DELETE_USERS_SUCCESS);
        done();
    });
});
it('should mock UPDATE_USER_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .put(`/api/users/`)
        .reply(201, { body: { document: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanbeing', role: 'User' }] } });

    const expectedActions = [
        { type: types.UPDATE_USERS_SUCCESS, body: { USERS: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanbeing', role: 'User' }]} }
    ];

    const store = mockStore({ users: [] }, expectedActions, done());
    store.dispatch(userActions.updateUsers()).then(() => {
        const actions = store.putActions();
        expect(actions[1].type).toEqual(types.UPDATE_USERS_SUCCESS);
        done();
    });
});
