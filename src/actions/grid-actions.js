export const PLAY = 'PLAY';
export const RANDOMIZE = 'RANDOMIZE';
export const CHANGE_CELL = 'CHANGE_CELL';

export function updateGrid(newUser){
  return {
    type: PLAY
  };
}
export function changeCell(col, row){

  return {
    type: CHANGE_CELL,
    payload:{
      col,
      row
    }
  };
}
export function randomGrid(){

  return{
    type: RANDOMIZE,
    payload:{

    }
  }
}
