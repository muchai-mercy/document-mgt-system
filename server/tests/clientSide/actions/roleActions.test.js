
import expect from 'expect';
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import * as roleActions from '../../../../client/actions/roleActions';
import * as types from '../../../../client/actions/actionTypes';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const roles = {};

describe('Roles Actions', () => {
    it('should mock LOAD_ROLES_SUCCESS', (done) => {
        nock('http://localhost:3000/')
            .get('/api/roles')
            .reply(200, { body: { role: [{ id: 1, role: "Admin" }] } });

        const expectedActions = [
            { type: types.ALL_ROLES_SUCCESS, body: { ROLES: [{ id: 1, role: "Admin" }] } }
        ];
        const store = mockStore({ roles: [] }, expectedActions, done());
        store.dispatch(roleActions.allRoles()).then(() => {
            const actions = store.getActions();
            expect(actions[1].type).toEqual(types.ALL_ROLES_SUCCESS);
            done();
        });
    });
});

it('should mock SEARCH_ROLE_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .get('/api/search/roles?q=A')
        .reply(200, { body: { roles: [{ id: 1, role: "Admin" }] } });

    const expectedActions = [
        { type: types.SEARCH_ROLE_SUCCESS, body: { ROLES: [{ id: 1, role: "Admin" }] } }
    ];

    const store = mockStore({ roles: [] }, expectedActions, done());
    store.dispatch(roleActions.searchRole()).then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(types.SEARCH_ROLE_SUCCESS);
        done();
    });
});

it('should mock POST_ROLE_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .post('/api/roles')
        .reply(201, { body: { roles: [{ id: 1, role: "Admin" }] } });

    const expectedActions = [
        { type: types.POST_ROLE_SUCCESS, body: { ROLES: [{ id: 1, role: "Admin" }] } }
    ];

    const store = mockStore({ roles: [] }, expectedActions, done());
    store.dispatch(roleActions.postRoles()).then(() => {
        const actions = store.postActions();
        expect(actions[1].type).toEqual(types.POST_ROLE_SUCCESS);
        done();
    });
});
it('should mock DELETE_ROLE_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .delete(`/api/roles/${roles.id}`)
        .reply(200);

    const expectedActions = [
        { type: types.DELETE_ROLE_SUCCESS }
    ];

    const store = mockStore({ roles: [] }, expectedActions, done());
    store.dispatch(roleActions.deleteRole()).then(() => {
        const actions = store.deleteActions();
        expect(actions[1].type).toEqual(types.DELETE_ROLE_SUCCESS);
        done();
    });
});
it('should mock UPDATE_ROLE_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .put(`/api/roles/${roles.id}`)
        .reply(201, { body: { roles: [{ id: 1, role: "Admin" }] } });

    const expectedActions = [
        { type: types.UPDATE_ROLE_SUCCESS, body: { ROLES: [{ id: 1, role: "Admin" }] } }
    ];

    const store = mockStore({ roles: [] }, expectedActions, done());
    store.dispatch(roleActions.updateRoles()).then(() => {
        const actions = store.putActions();
        expect(actions[1].type).toEqual(types.UPDATE_ROLE_SUCCESS);
        done();
    });
});
