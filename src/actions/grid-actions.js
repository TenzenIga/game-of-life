export const PLAY = 'PLAY';
export const RANDOMIZE = 'RANDOMIZE';
export const CHANGE_CELL = 'CHANGE_CELL';

export function updateGrid(grid){
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
export function randomize(){

  return{
    type: RANDOMIZE
  }
}
