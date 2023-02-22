import * as React from 'react';
import { Button } from '@mui/material';
import './css/Interest.css';


export default function Interest({text, Icon}) {
  return (
    <Button id="interestButton" >
       <Icon/>
       {text}
    </Button>
  );
}