// import * as types from './actionTypes';
import { ALL_DOCUMENTS_SUCCESS, POST_DOCUMENTS_SUCCESS, UPDATE_DOCUMENTS_SUCCESS, DELETE_DOCUMENTS_SUCCESS, SEARCH_DOCUMENTS_SUCCESS } from './actionTypes';
import { postEndpoint, getEndpoint , deleteEndpoint, putEndpoint } from "../api/consumeApi";

export function allDocumentsSuccess(documents) {
  return {type: ALL_DOCUMENTS_SUCCESS, documents};
  
}

export function postDocumentsSuccess(document) {
  return {type: POST_DOCUMENTS_SUCCESS, document};
}
export function updateDocumentsSuccess(document) {
  return {type: UPDATE_DOCUMENTS_SUCCESS, document};
}
export function deleteDocumentsSuccess(document) {
  return {type: DELETE_DOCUMENTS_SUCCESS, document};
}
export function searchDocumentsSuccess(title) {
  return {type: SEARCH_DOCUMENTS_SUCCESS, title};
}

export function allDocuments(limit=3, offset=0) {
  return (dispatch) => {
    getEndpoint(`/api/documents?limit=${limit}&offset=${offset}`)
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

export function searchDocuments(title ) {
  return (dispatch) => {
    postEndpoint(`/api/search/documents/?q=${title}`)
    .send(title)
    .end((err, res) => dispatch(searchDocumentsSuccess({ documents: res.body.title })
    ));
  };
}
