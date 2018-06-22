import React from 'react';

const Cell = (props)=>{
  let style = props.value?{backgroundColor:'#BA55D3'}:{backgroundColor:'#F8F8FF'};

   return (
     <div className="cell" onClick={props.onClick} style={style}></div>
 );
}
export default Cell;
