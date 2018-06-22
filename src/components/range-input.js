import React from 'react';

const Input = (props)=>{

   return (
     <div className='input-container'>
        <input
          className="slider"
      id="typeinp"
      type="range"
      min="100" max="1000"
      value={props.speed}
      onChange={props.changeSpeed}
      step="100" />
      </div>
 );
}
export default Input;
