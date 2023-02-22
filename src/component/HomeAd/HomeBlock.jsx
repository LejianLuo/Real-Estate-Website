import * as React from 'react';
import './css/HomeBlock.css';
import HomeCard from './HomeCard';

export default function HomeBlock() {

  return (

    <div id='homeBlock'>
      <h1>Let's find your dream home</h1>
      <p>Our tools help you easily locate top neighbourhoods, find right property & understand its actual market price.</p>
      <HomeCard/>
      <HomeCard/>

    </div>

  );
}