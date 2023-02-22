import * as React from 'react';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import './css/OptionCard.css'


export default function OptionCard() {
  return (
      <Card className='optionInfo' variant="outlined">
        <img className='optionImgTop'src='https://www.squareyards.com/assets/images/square-services-img/urban-money-logo.svg'/>
        <h3 className='OptionName'>Home Loan</h3>

        <ul>
            <li>Attractive Interest Rates</li>
            <li>Greater Loan Eligibility</li>
            <li>Loan Offers From Banks</li>
        </ul>

        <Button id='link' variant='outlined' >Apply Now</Button>
        <img className='optionImgBottom'src='https://www.squareyards.com/assets/images/square-services-img/home-loan-icon-2.svg'/>
      </Card>

  );
}