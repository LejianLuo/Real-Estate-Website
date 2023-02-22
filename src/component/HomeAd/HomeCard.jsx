import * as React from 'react';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import './css/HomeCard.css';


export default function HomeCard() {
  return (
      <Card className='homeInfo' variant="outlined">
        <img src='https://www.squareyards.com/assets/images/tools-svg-banner/3d-desktop-banner.svg'/>
  
      </Card>

  );
}