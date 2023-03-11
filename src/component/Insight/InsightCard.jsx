import * as React from 'react';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import './css/InsightCard.css'

export default function InsightCard(){
    return(
        <Card  id='insightCard'variant="outlined">
        <img src='https://www.squareyards.com/assets/images/insight-tool-img/price-trend-cityName-img.svg'/>
        <h5 >India Price Trends & Market Analysis</h5>
        <p >Market rates, data analytics & registered transactions of top project & localities</p>
        <Button variant='text' >Explore Now</Button>
      </Card>
    );
}