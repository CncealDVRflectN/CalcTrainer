import { combineReducers } from 'redux';
import isNumber from '../logic/isNumber';
import isBinaryNumber from '../logic/isBinaryNumber';

export const rootReducer = combineReducers({
    scoreState: (state = {score: 0}, action) => {
      switch (action.type) {
        case 'SET_SCORE_STATE': {
          console.log(action)
          return {  ...state, score: action.payload }
        }
        default:
          return state;
      }
    }
  }
);