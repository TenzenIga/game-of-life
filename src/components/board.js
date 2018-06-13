import React, { Component } from 'react';
import Cell from './cell';
import { connect } from 'react-redux';
import {changeCell, updateGrid, randomize, reset } from '../actions/grid-actions';
import { changeSpeed } from '../actions/speed-actions';
 class Board extends Component {
   constructor(props){

     super(props);
this.timerId = null;

    /* this.state = {
      grid : Array(30).fill(Array(50).fill(false)),
      generation:0
     }
     this.handleClick = this.handleClick.bind(this); */

}

handleClick = (col, row)=>{

     this.props.onChangeCell(col, row)
   }

upGen =()=>{

  let {speed} = this.props;
setTimeout(function run() {
  this.props.onUpdateGrid()
  this.timerId = setTimeout(run.bind(this), speed);
}.bind(this), speed);
}

createRandomGrid = ()=>{
  this.props.onRandomize();
}

reset= ()=>{
  this.props.onReset();
  clearTimeout(this.timerId);
}
changeSpeed = (event) =>{
  this.props.onChangeSpeed(event.target.value)
}

  render(){
    let grid =  this.props.grid;
  let arr = grid.map((col, colInx)=>{
        return col.map((cell, cellInx) =>{
          return <Cell key={colInx + cellInx} onClick={(e)=>this.handleClick(colInx, cellInx,e)} value={cell}/>
        })
      })

  return(
    <div>
      <button onClick={this.upGen}>Start</button>
      <button onClick={this.reset}>Reset</button>
      <button onClick={this.createRandomGrid}>Rondomize</button>
      <div className='input-container'>
        <input
      id="typeinp"
      type="range"
      min="100" max="1000"
      value={this.props.speed}
      onChange={this.changeSpeed}
      step="100" />
      </div>
      <p>Speed-{this.props.speed}</p>
      <div className="board">{arr}</div>
  </div>

    );
  }
}

const mapStatesToProps = state =>({
 grid:state.grid,
 speed:state.speed
});

const mapActionsToProps ={
  onChangeCell: changeCell,
  onUpdateGrid:updateGrid,
  onRandomize:randomize,
  onReset:reset,
  onChangeSpeed: changeSpeed
}

export default connect(mapStatesToProps, mapActionsToProps)(Board);
