
import expect from 'expect';
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import * as documentActions from '../../../client/actions/documentActions';
import * as types from '../../../client/actions/actionTypes';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

// Test a sync action
describe('Documents Actions', () => {
    describe('postDocumentSuccess', () => {
        it('should have a create document action', () => {
            // arrange
            const document = {};
            const expectedAction = {
                type: types.POST_DOCUMENTS_SUCCESS,
                document
            };
            // action
            const action = documentActions.postDocumentsSuccess(document);
            // assertion
            expect(action).toEqual(expectedAction);
        });
        it('should GET all documents success', () => {
            const expectedAction = {
                type: types.ALL_DOCUMENTS_SUCCESS
            };
        });
        it('should UPDATE a document success', () => {
            const expectedAction = {
                type: types.UPDATE_DOCUMENTS_SUCCESS
            };
        });
        it('should DELETE a document success', () => {
            const expectedAction = {
                type: types.DELETE_DOCUMENTS_SUCCESS
            };
        });
        it('should SEARCH a document by title success', () => {
            const expectedAction = {
                type: types.SEARCH_DOCUMENTS_SUCCESS
            };
        });
        it('should GET all public documents success', () => {
            const expectedAction = {
                type: types.PUBLIC_DOCUMENTS_SUCCESS
            };
        });
    });
});

describe('Async Actions', () => {
    it('should mock LOAD_DOCUMENTS_SUCCESS', (done) => {
        nock('http://localhost:3000/')
            .get('/api/documents')
            .reply(200, { body: { document: [{ id: 5, title: 'Women Clothes', content: 'test it out', category: 'Private' }] } });

        const expectedActions = [
            { type: types.ALL_DOCUMENTS_SUCCESS, body: { DOCUMENTS: [{ id: 5, title: 'Women Clothes', content: 'test it out', category: 'Private' }] } }
        ];

        const store = mockStore({ documents: [] }, expectedActions, done());
        store.dispatch(documentActions.allDocuments()).then(() => {
            const actions = store.getActions();
            expect(actions[1].type).toEqual(types.ALL_DOCUMENTS_SUCCESS);
            done();
        });
    });
});

it('should mock SEARCH_DOCUMENT_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .get('/api/search/documents?q=wo')
        .reply(200, { body: { document: [{ id: 5, title: 'Women Stuff', content: 'test it out', category: 'Private' }] } });

    const expectedActions = [
        { type: types.SEARCH_DOCUMENTS_SUCCESS, body: { DOCUMENTS: [{  id: 5, title: 'Women Stuff', content: 'test it out', category: 'Private' }] } }
    ];

    const store = mockStore({ documents: [] }, expectedActions, done());
    store.dispatch(documentActions.searchDocuments()).then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(types.SEARCH_DOCUMENTS_SUCCESS);
        done();
    });
});

it('should mock POST_DOCUMENT_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .post('/api/documents')
        .reply(201, { body: { document: [{ id: 5, title: 'Women Clothes', content: 'test it out', userId: '3', category: 'Private' }] } });

    const expectedActions = [
        { type: types.POST_DOCUMENTS_SUCCESS, body: { DOCUMENTS: [{ id: 5, title: 'Women Clothes', content: 'test it out', userId: '3', category: 'Private'}] } }
    ];

    const store = mockStore({ documents: [] }, expectedActions, done());
    store.dispatch(documentActions.postDocuments()).then(() => {
        const actions = store.postActions();
        expect(actions[1].type).toEqual(types.POST_DOCUMENTS_SUCCESS);
        done();
    });
});
it('should mock DELETE_DOCUMENT_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .delete(`/api/documents/${document.id}`)
        .reply(200);

    const expectedActions = [
        { type: types.DELETE_DOCUMENTS_SUCCESS }
    ];

    const store = mockStore({ documents: [] }, expectedActions, done());
    store.dispatch(documentActions.postDocuments()).then(() => {
        const actions = store.deleteActions();
        expect(actions[1].type).toEqual(types.DELETE_DOCUMENTS_SUCCESS);
        done();
    });
});
it('should mock UPDATE_DOCUMENT_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .put(`/api/documents/${document.id}`)
        .reply(201, { body: { document: [{ id: 3, title: 'Women Clothes', content: 'test it again', userId: '3', category: 'Private' }] } });

    const expectedActions = [
        { type: types.UPDATE_DOCUMENTS_SUCCESS, body: { DOCUMENTS: [{ id: 3, title: 'Women Clothes', content: 'test it out again', userId: '3', category: 'Private' }] } }
    ];

    const store = mockStore({ documents: [] }, expectedActions, done());
    store.dispatch(documentActions.postDocuments()).then(() => {
        const actions = store.putActions();
        expect(actions[1].type).toEqual(types.UPDATE_DOCUMENTS_SUCCESS);
        done();
    });
});
it('should mock PUBLIC_DOCUMENT_SUCCESS', (done) => {
    nock('http://localhost:3000/')
        .get('/api/documents/public')
        .reply(201, { body: { document: [{ id: 5, title: 'Women Clothes', content: 'test it out', userId: '3', category: 'Private' }, {}, {}] } });

    const expectedActions = [
        { type: types.PUBLIC_DOCUMENTS_SUCCESS, body: { DOCUMENTS: [{ id: 5, title: 'Women Clothes', content: 'test it out', userId: '3', category: 'Private' }, {}, {}] } }
    ];

    const store = mockStore({ documents: [] }, expectedActions, done());
    store.dispatch(documentActions.postDocuments()).then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual(types.PUBLIC_DOCUMENTS_SUCCESS);
        done();
    });
});
