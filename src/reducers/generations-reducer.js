import { UPDATATE_GENERATION } from "../actions/generations-actions";
import { RESET, CHANGE_CELL } from '../actions/grid-actions';
export default function generationReducer(state= 0, {type, payload}){
  switch (type) {
    case CHANGE_CELL:
      return  state + 1
      break;
    case RESET:
       return  0;
      break;
    default:
      return state;
  }
}
