
import expect from 'expect';
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import * as documentActions from '../actions/documentActions';
import * as types from '../actions/actionTypes';


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
    .reply(200, { body: { document: [{ id: 5, name: 'Women Clothes', content: 'test it out' }] } });

    const expectedActions = [
      { type: types.ALL_DOCUMENTS_SUCCESS, body: { DOCUMENTS: [{ id: '60', name: 'Document 60' }] } }
    ];

    const store = mockStore({ documents: [] }, expectedActions, done());
    store.dispatch(documentActions.allDocuments()).then(() => {
      const actions = store.getActions();
      expect(actions[1].type).toEqual(types.ALL_DOCUMENTS_SUCCESS);
      done();
    });
  });
});
