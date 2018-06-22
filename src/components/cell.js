import React from 'react';

const Cell = (props)=>{
  let style = props.value?{backgroundColor:'#DDA0DD'}:{backgroundColor:'#0d0d0d'};

   return (
     <div className="cell" onClick={props.onClick} style={style}></div>
 );
}
export default Cell;
