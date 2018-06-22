import React from 'react';

const Data = (props)=>{

   return (
     <div className="data-table">
       <p>Speed:{props.speed} ms</p>
       <p>Generation:{props.generation}</p>
     </div>
 );
}
export default Data;
