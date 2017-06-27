
import expect from 'expect';
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import * as documentActions from '../actions/documentActions';
import * as types from '../actions/actionTypes';


// Test a sync action
describe('Documents Actions', () => {
  describe('postDocumentSuccess', () => {
    it('should have a create document action', () => {
      // arrange
      const document = { id: '10', title: 'Clothes', content: 'Women clothes', category: 'Public' };
      const expectedAction = {
        type: types.POST_DOCUMENTS_SUCCESS,
        document
      };
      // action
      const action = documentActions.postDocumentsSuccess(document);
      // assertion
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async tests', () =>{
  afterEach(() =>  {
    nock.cleanAll();
  });
});
it('should')

