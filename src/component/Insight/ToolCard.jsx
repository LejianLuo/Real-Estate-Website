import * as React from 'react';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './css/ToolCard.css'

export default function ToolCard(){
    return(
        <Card  id='ToolCard'variant="outlined">
          <ul>
            <li>  
              <img src='https://www.squareyards.com/assets/images/broker-performance/prime-connect.svg'/>
              <h3 >Prime Connect</h3>
            </li>
            <li>
              <CheckCircleIcon/>
              <span>Confirmed Site Visits to your Project</span>
            </li>
              <CheckCircleIcon/>
              <span>Confirmed Site Visits to your Project</span>
            <li>
              <CheckCircleIcon/>
              <span>Confirmed Site Visits to your Project</span>
            </li>
            <li>
              <Button variant='contained' >Know More</Button>
            </li>
          </ul>
          <img src='https://www.squareyards.com/assets/images/broker-performance/prime_connect-side.svg'/>
      </Card>
    );
}