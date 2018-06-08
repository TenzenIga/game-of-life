import { PLAY, CHANGE_CELL, RANDOMIZE } from '../actions/grid-actions';

export default function gridReducer( state={}, {type, payload}){
  switch (type) {
    case PLAY:
      return checkNeighbours(state);
      break;
    case CHANGE_CELL:
      let grid = JSON.parse(JSON.stringify(state));
      grid[payload.col][payload.row] = !grid[payload.col][payload.row];
      return grid;
      break;
      case RANDOMIZE:
      return randomize(state);
      break;
    default:
    return state;
  }
}

function randomize(grid){
  let base = Array(30).fill(Array(50).fill(false));
  let newGrid = base.map(col =>{
    return col.map(cell => {
      if(Math.floor(Math.random()*4) === 2){
        cell = true;
      }
      return cell;
    })
  })
  return newGrid;
}

//check neighbours
function checkNeighbours(currGrid){
let colLen = 30;
let rowLen = 50;
let grid = JSON.parse(JSON.stringify(currGrid));
let newGrid = JSON.parse(JSON.stringify(currGrid));
for (let col = 0; col < colLen; col++) {
  for (let cell = 0; cell < rowLen; cell++) {
    let topCol = fixFirstOrLastCells(col+1, colLen);
    let bottomCol = fixFirstOrLastCells(col-1, colLen);
    let cellFromLeft = fixFirstOrLastCells(cell-1, rowLen);
    let cellFromRight = fixFirstOrLastCells(cell+1, rowLen);
    let count = 0;
        if(grid[col][cellFromLeft]){ //cell from lef side
          count++;
        }
        if (grid[col][cellFromRight]) {//cell from right side
          count++;
        }
        if (grid[topCol][cellFromLeft]) { //top left cell
            count++;
        }
        if (grid[topCol][cell]) { //cell above
          count++;
        }
        if (grid[topCol][cellFromRight]) { //top right cell
            count++;
        }
        if (grid[bottomCol][cellFromLeft]) {//bottom left cell
            count++;
        }
        if (grid[bottomCol][cell]) { //bottom cell
          count++;
        }
        if (grid[bottomCol][cellFromRight]) { //bottom right cell
          count++;
        }
        if(grid[col][cell]=== false && count === 3){
          newGrid[col][cell] = true;
        }
        if (grid[col][cell]) {
          if (count < 2 || count > 3) {
            newGrid[col][cell] = false;
          }
        }
  }
}
return newGrid;
}


function fixFirstOrLastCells(index, arrLen) {
  if (index<0) {
    return arrLen-1;
  }
  if (index === arrLen) {
    return 0;
  }
  return index;
}
