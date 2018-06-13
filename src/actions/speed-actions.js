export const CHANGE_SPEED = 'CHANGE_SPEED';


export function changeSpeed(value){

  return {
    type: CHANGE_SPEED,
    payload:{
      value
    }
  };
}
