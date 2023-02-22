import * as React from 'react';
import Card from '@mui/material/Card';
import './css/FinanceCard.css'



export default function FinanceCard({imgSrc}) {
  return (
      <Card className='financeInfo' variant="outlined">
        <img className='financeImg'src={imgSrc}/>
      </Card>

  );
}