
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

// describe('Async tests', () => {
//     afterEach(() => {
//         nock.cleanAll();
//     });
//     it('should create BEGIN_AJAX_CALL and ALL_DOCUMENTS_SUCCESS when loading documents', (done) => {
//         const expectedActions = {
//             type: types.POST_DOCUMENTS_SUCCESS,
//             body: { document: [{ id: '10', title: 'Clothes', content: 'Women clothes', category: 'Public' }] }
//         };
//         const store = mockStore({ document: [], expectedActions });
//         store.dispatch(documentActions.allDocuments()).then(() => {
//             const actions = store.getActions();
//             expect(actions[0]).type.toEqual(types.ALL_DOCUMENTS_SUCCESS);
//             done();
//         });
//     });
// });
