import * as types from './actionTypes';
import { postEndpoint, getEndpoint } from "../api/consumeApi";

export function postDocumentsSuccess(documents) {
  return {type: types.POST_DOCUMENTS_SUCCESS, documents};
}
export function allDocumentsSuccess(documents) {
  return {type: types.ALL_DOCUMENTS_SUCCESS, documents};
}
export function postDocuments(document) {
  return (dispatch) => {
    postEndpoint('/api/documents')
    .send(document)
    .end((err, res) => dispatch(postDocumentsSuccess({ document: res.body })
    )).catch(error => { 
      throw(error);
    })
  };
}

export function allDocuments() {
  return (dispatch) => {
    getEndpoint('/api/documents')
    .end((err, res) => dispatch(allDocumentsSuccess(res.body)
    ))
  };
}
