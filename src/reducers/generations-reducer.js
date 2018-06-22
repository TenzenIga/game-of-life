
import { RESET, PLAY } from '../actions/grid-actions';
export default function generationReducer(state= 0, {type, payload}){
  switch (type) {
    case PLAY:
      return  state + 1
      break;
    case RESET:
       return  0;
      break;
    default:
      return state;
  }
}
