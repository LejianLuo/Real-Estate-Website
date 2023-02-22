import * as React from 'react';
import Card from '@mui/material/Card';
import './css/IntroductionCard.css';
import { Button } from '@mui/material';
import  './css/IntroductionCard.css';


export default function IntroductionCard() {
  return (
      <Card id='financeInfo' variant="outlined">
        <h3>Best Sellers in Delhi NCR</h3>
        <p>The latest residential offerings from the best builders in Delhi NCR, handpicked by our team of experts just for you and backed by our widely acclaimed transaction and financial services.</p>
        <Button id='viewAll'variant='outlined' >View All</Button>
      </Card>

  );
}