import React, { Component } from 'react';
import Cell from './cell';

 class Board extends Component {
   constructor(props){
     super(props);

     this.state = {
      grid : Array(30).fill(Array(50).fill(false)),
      generation:0
     }
     this.handleClick = this.handleClick.bind(this);
}
    handleClick(col, row){
      let grid = JSON.parse(JSON.stringify(this.state.grid));
      console.log(`${col}-${row}`);
      grid[col][row] = !grid[col][row];
      this.setState({
        grid
      })
    }

    play =()=>{
      let grid = this.state.grid;
      let newGrid = JSON.parse(JSON.stringify(this.state.grid));
      //let newGrid = this.state.grid.map(array => array.slice());﻿
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          let count=0;
            if (grid[i][j-1]) {
              count++;
            }
            if ( grid[i][j+1]) {
              count++;
            }
            if (grid[i-1] && grid[i-1][j-1]) {
              count++;
            }
            if (grid[i-1] && grid[i-1][j]) {
              count++;
            }
            if (grid[i-1] && grid[i-1][j+1]) {
              count++;
            }
            if (grid[i+1] && grid[i+1][j-1]) {
              count++;
            }
            if (grid[i+1] && grid[i+1][j]) {
              count++;
            }
            if(i+1 < 30 && j+1 < 50) if (grid[i+1][j+1]) {
              count++;
          }
            if(grid[i][j]===false && count === 3){
              newGrid[i][j] = true;
            }
            if(grid[i][j]) if(count < 2 || count >3){
                newGrid[i][j]=false;
            }
        }
      }
    this.setState({
      grid:newGrid,
      generation:this.state.generation+1
    })
}
firstGeneration=()=>{
  let grid = JSON.parse(JSON.stringify(this.state.grid));
  //let grid = this.state.grid.map(array => array.slice());
  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      if(Math.floor(Math.random() * 4) === 1){
        grid[i][j]=true;
      }
    }
  }
  this.setState({
    grid
  })
}
componentDidMount(){
  this.firstGeneration();
  this.timerId = setInterval(this.play, 500);

}

  render(){
    let {grid} = this.state;
    const arr = grid.map((k, index) =>
       k.map((key, index2) =>
         < Cell key={index + index2} handleClick={this.handleClick} col={index} row={index2} value={key}/>
     )
  )

    return(<div>
      <div className="board">{arr}</div>
      <h3>{this.state.generation}</h3>
  </div>

    );
  }
}

export default Board;
