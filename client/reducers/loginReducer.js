import * as types from '../actions/actionTypes';  
import {browserHistory} from 'react-router';

export default function loginReducer(state = null, action) {  
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      browserHistory.push('/');
      return !!sessionStorage.jwt;
    default: 
      return state;
  }
}
