import * as React from 'react';
import CityCard from './CityCard';
import './css/CityBlock.css';

export default function CityBlock(){
    return(
        <div id='cityBlock'>
            <h1>Find Your Dream Property in Your Preferred City</h1>
            <div id='grid'>  
                {Array(30).fill(0).map(()=>(<CityCard/>))}
            </div>
        </div>
    );
}