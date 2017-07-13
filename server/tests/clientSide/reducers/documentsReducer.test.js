import expect from "expect";
import documentsReducer from "../../../../client/reducers/documentsReducer";
import * as documentActions from '../../../../client/actions/documentActions';

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
    expect(newState.length).toEqual(4);
  });
   it('it should delete a document when passed DELETE_DOCUMENT_SUCCESS', () => {
    const initialState = [];
    const document = [
      { id: '1', title: 'Men', content: 'Will be men', }
    ];
    const action = documentActions.deleteDocumentsSuccess(document);
    const newState = documentsReducer(initialState, action);
    expect(newState.length).toEqual(0);
  });

  it('it should get all public documents when passed PUBLIC_DOCUMENTS_SUCCESS', () => {
    const initialState = [];
    const document = [
      { id: '1', title: 'Men', content: 'Will be men', }
    ];
    const action = documentActions.publicDocumentsSuccess(document);
    const newState = documentsReducer(initialState, action);
    expect(newState.length).toEqual(1);
  });

  it('it should get all documents when passed LOAD_DOCUMENTS_SUCCESS', () => {
    const initialState = [];
    const document = [
      { id: '1', title: 'Men', content: 'Will be men', }
    ];
    const action = documentActions.allDocumentsSuccess(document);
    const newState = documentsReducer(initialState, action);
    expect(newState).toEqual(document);
  });
});
