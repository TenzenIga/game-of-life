
import { RESET, PLAY } from '../actions/grid-actions';
export default function generationReducer(state= 0, {type, payload}){
  switch (type) {
    case PLAY:
      return  state + 1
    case RESET:
       return  0;
    default:
      return state;
  }
}
