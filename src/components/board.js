import React, { Component } from 'react';
import Cell from './cell';
import Buttons from './buttons';
import { connect } from 'react-redux';
import {changeCell, updateGrid, randomize, reset } from '../actions/grid-actions';
import { changeSpeed } from '../actions/speed-actions';
import { updateGeneration } from '../actions/generations-actions';
 class Board extends Component {
   constructor(props){

     super(props);
this.timerId = null;

}

handleClick = (col, row)=>{

     this.props.onChangeCell(col, row)
   }

upGen =()=>{

  let {speed} = this.props;
  clearTimeout(this.timerId);
/*setTimeout(function run() {
  this.props.onUpdateGrid();
  this.props.onUpdateGeneration();
  this.timerId = setTimeout(run.bind(this), speed);
}.bind(this), speed); */
this.timerId = setInterval(()=>{
  this.props.onUpdateGrid();
  //this.props.onUpdateGeneration();
},speed)
}


reset= ()=>{
  this.props.onReset();
  clearInterval(this.timerId);
  this.timerId = null;
}
changeSpeed = (event) =>{
  this.props.onChangeSpeed(event.target.value)
  clearTimeout(this.timerId);
/*setTimeout(function run() {
  this.props.onUpdateGrid();
  this.props.onUpdateGeneration();
  this.timerId = setTimeout(run.bind(this), speed);
}.bind(this), speed); */
  if (this.timerId === null) {
    return;
  }
 this.timerId = setInterval(()=>{
 this.props.onUpdateGrid();
//this.props.onUpdateGeneration();
}
 ,event.target.value)

}

  render(){
    let grid =  this.props.grid;
  let arr = grid.map((col, colInx)=>{
        return col.map((cell, cellInx) =>{
          return <Cell key={colInx + cellInx} onClick={(e)=>this.handleClick(colInx, cellInx,e)} value={cell}/>
        })
      })
  return(
    <div >
     <Buttons play={()=>this.upGen()} randomize={()=>this.props.onRandomize()} reset={()=>this.reset()} />
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
      <p>Generation {this.props.generation}</p>
      <div className="board">{arr}</div>

  </div>

    );
  }
}

const mapStatesToProps = state =>({
 grid:state.grid,
 speed:state.speed,
 generation:state.generation
});

const mapActionsToProps ={
  onChangeCell: changeCell,
  onUpdateGrid:updateGrid,
  onRandomize:randomize,
  onReset:reset,
  onChangeSpeed: changeSpeed,
  onUpdateGeneration: changeCell
}

export default connect(mapStatesToProps, mapActionsToProps)(Board);
