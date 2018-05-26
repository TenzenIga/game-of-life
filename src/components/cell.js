import React, { Component } from 'react';

class Cell extends Component{
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
}
onClick(){
  this.props.handleClick(this.props.col, this.props.row);
}
  render(){


  let style = this.props.value?{backgroundColor:'gold'}:{backgroundColor:'none'};

   return (
     <div className="cell" style={style} onClick ={this.onClick} ></div>
 );
}
}
export default Cell;
