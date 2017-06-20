import * as types from './actionTypes';
import { postEndpoint, getEndpoint , deleteEndpoint, putEndpoint } from "../api/consumeApi";

export function allDocumentsSuccess(documents) {
  return {type: types.ALL_DOCUMENTS_SUCCESS, documents};
}

export function postDocumentsSuccess(document) {
  return {type: types.POST_DOCUMENTS_SUCCESS, document};
}
export function updateDocumentsSuccess(document) {
  return {type: types.UPDATE_DOCUMENTS_SUCCESS, document};
}
export function deleteDocumentsSuccess(document) {
  return {type: types.DELETE_DOCUMENTS_SUCCESS, document};
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
    putEndpoint(`/api/documents/${documents.id}`)
    .send(documents)
    .end((err, res) => dispatch(updateDocumentsSuccess({ documents: res.body })
    ));
  };
}

export function deleteDocuments(documents) {
  return (dispatch) => {
    deleteEndpoint(`/api/documents/${documents.id}`)
    .send(documents)
    .end((err, res) => dispatch(deleteDocumentsSuccess(documents)
    ));
  };
}

