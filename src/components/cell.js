import React, { Component } from 'react';

const Cell = (props)=>{
  let style = props.value?{backgroundColor:'gold'}:{backgroundColor:'white'};

   return (
     <div className="cell" onClick={props.onClick} style={style}></div>
 );
}
export default Cell;
