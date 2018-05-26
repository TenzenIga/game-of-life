import React, { Component } from 'react';
import Cell from './cell';

 class Board extends Component {
   constructor(props){
     super(props);

     this.state = {
      grid : Array(30).fill(Array(50).fill(false))
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

  render(){
    let {grid} = this.state;
    const arr = grid.map((k, index) =>
       k.map((key, index2) =>
         < Cell key={index + index2} handleClick={this.handleClick} col={index} row={index2} value={key}/>
     )
  )
    return(
  <div className="board">{arr}</div>
    );
  }
}

export default Board;
