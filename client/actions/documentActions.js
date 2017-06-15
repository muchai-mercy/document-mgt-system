import * as types from './actionTypes';
import { postEndpoint, getEndpoint } from "../api/consumeApi";

export function allDocumentsSuccess(documents) {
  return {type: types.ALL_DOCUMENTS_SUCCESS, documents};
}

export function postDocumentsSuccess(documents) {
  return {type: types.POST_DOCUMENTS_SUCCESS, document};
}
export function updateDocumentsSuccess(documents) {
  return {type: types.UPDATE_DOCUMENTS_SUCCESS, document};
}

export function allDocuments() {
  return (dispatch) => {
    getEndpoint('/api/documents')
    .end((err, res) => dispatch(allDocumentsSuccess(res.body)
    ));
  };
}

export function postDocuments(documents) {
  return (dispatch) => {
    postEndpoint('/api/documents')
    .send(documents)
    .end((err, res) => dispatch(postDocumentsSuccess({ documents: res.body })
    ));
  };
}
export function updateDocuments(documents) {
  return (dispatch) => {
    postEndpoint(`/api/documents/x${documents.id}`)
    .send(documents)
    .end((err, res) => dispatch(updateDocumentsSuccess({ documents: res.body })
    ));
  };
}

// export function saveDocument(document) {
//   return (dispatch, getState) => {
//     postEndpoint('/api/documents')
//     .send(document)
//     .end((err, res) => dispatch(postDocumentsSuccess({ document: res.body })
//     )).catch(error => { 
//       throw(error);
//     });
//   };
// }
