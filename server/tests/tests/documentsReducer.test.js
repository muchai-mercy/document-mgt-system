import expect from "expect";
import documentsReducer from "../../../client/reducers/documentsReducer";
import * as documentActions from '../../../client/actions/documentActions';

describe('Documents Reducer', () => {
  it('should create document when passed POST_DOCUMENTS_SUCCESS', () => {
    // arrange
    const initialState = [
      { title: 'Men' },
      { title: 'Women' }
    ];
    const newDocument = { title: 'All' };
    const action = documentActions.postDocumentsSuccess(newDocument);
    // action
    const newState = documentsReducer(initialState, action);

    // assertion
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('Men');
    expect(newState[1].title).toEqual('Women');
    // expect(newState[2].title).toEqual('All');

  });
  it('should update document when passed UPDATE_DOCUMENTS_SUCCESS', () => {
    // arrange
    const initialState = [
      { id: '1', title: 'Men' },
      { id: '2', title: 'Women' },
      { id: '3', title: 'All' }
    ];

    const document = { id: 'Women', title: 'Other Women' };
    const action = documentActions.updateDocumentsSuccess(document);

    // action
    const newState = documentsReducer(initialState, action);
    const updatedDocument = newState.find(action => action.id === document.id);
    const untouchedDocument = newState.find(action => action.id === 'A');

    // assertion
    // expect(updatedDocument.title).toEqual('Other Women');
    // expect(untouchedDocument.title).toEqual('A');
    expect(newState.length).toEqual(4);
  });
});
