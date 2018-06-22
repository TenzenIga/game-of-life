import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Buttons = (props)=>{

   return (
     <ButtonGroup>
     <Button onClick={props.play}> Play</Button>
     <Button onClick={props.randomize}> Randomize</Button>
     <Button onClick={props.reset}> Reset</Button>
     </ButtonGroup>
 );
}
export default Buttons;
