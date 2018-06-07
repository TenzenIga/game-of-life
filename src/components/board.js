import React, { Component } from 'react';
import Cell from './cell';
import { connect } from 'react-redux';
import {changeCell, updateGrid } from '../actions/grid-actions';

 class Board extends Component {
   constructor(props){
     super(props);

    /* this.state = {
      grid : Array(30).fill(Array(50).fill(false)),
      generation:0
     }
     this.handleClick = this.handleClick.bind(this); */
}

/*    handleClick(col, row){
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
  let grid = JSON.parse(JSON.stringify(this.props.grid));
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
  //this.timerId = setInterval(this.play, 100);

}
*/
handleClick = (col, row)=>{

     this.props.onChangeCell(col, row)
   }
upGen =()=>{
  this.props.onUpdateGrid();
}
  render(){
    let {grid} = this.props;
  let arr = grid.map((col, colInx)=>{
        return col.map((cell, cellInx) =>{
          return <Cell key={colInx + cellInx} onClick={(e)=>this.handleClick(colInx, cellInx,e)} value={cell}/>
        })
      })

  return(
    <div>
      <button onClick={this.upGen}>Up</button>
      <div className="board">{arr}</div>
  </div>

    );
  }
}

const mapStatesToProps = state =>({
 grid:state.grid
});

const mapActionsToProps ={
  onChangeCell: changeCell,
  onUpdateGrid:updateGrid
}
export default connect(mapStatesToProps, mapActionsToProps)(Board);
