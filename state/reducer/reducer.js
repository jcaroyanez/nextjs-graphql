import { HYDRATE } from 'next-redux-wrapper';
import { ACTION_TYPE } from 'state/action/actions';

const initialState = {
  properties: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case ACTION_TYPE.SET_PROPERTIES:
      return {...state, properties: action.payload}  
    default:
      return state;
  }
};