import { CHANGE_SPEED } from "../actions/speed-actions";

export default function speedReducer(state='', {type, payload}){
  switch (type) {
    case CHANGE_SPEED:
      return payload.value;
    default:
      return state;
  }
}
