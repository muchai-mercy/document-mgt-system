
import expect from 'expect';
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import * as sessionActions from '../../../../client/actions/sessionActions';
import * as types from '../../../../client/actions/actionTypes';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Session Actions', () => {
    it('should mock SIGN_UP_SUCCESS', (done) => {
        nock('http://localhost:3000/')
            .post('/api/users')
            .reply(201, { body: { user: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } });
        const expectedActions = [
            { type: types.SIGNUP_USER, body: { USERS: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } }
        ];
        const store = mockStore({ user: [] }, expectedActions, done());
        store.dispatch(sessionActions.userSignup()).then(() => {
            const actions = store.postActions();
            expect(actions[1].type).toEqual(types.SIGNUP_USER);
            done();
        });
    });
    it('should mock LOGIN_SUCCESS', (done) => {
        nock('http://localhost:3000/')
            .post('/api/users/login')
            .reply(201, { body: { user: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } });
        const expectedActions = [
            { type: types.LOGIN_SUCCESS, body: { USERS: [{ id: '2', firstName: 'human', lastName: 'human', email: 'human@gmail.com', username: 'humanie', role: 'User' }] } }
        ];
        const store = mockStore({ user: [] }, expectedActions, done());
        store.dispatch(sessionActions.loginUser()).then(() => {
            const actions = store.postActions();
            expect(actions[1].type).toEqual(types.LOGIN_SUCCESS);
            done();
        });
    });
    it('should mock LOGOUT_SUCCESS', (done) => {
        nock('http://localhost:3000/');
        const expectedActions = [
            { type: types.LOGOUT_SUCCESS }
        ];
        const store = mockStore({ user: [] }, expectedActions, done());
        store.dispatch(sessionActions.logoutUser()).then(() => {
            expect(types.LOGOUT_SUCCESS).toEqual(types.LOGOUT_SUCCESS);
            done();
        });
    });

});
