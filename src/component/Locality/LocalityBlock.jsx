import * as React from 'react';
import LocalityCarousel from './LocalityCarousel';

export default function LocalityBlock(){
    return(
        <div style={{textAlign: "center"}}>
            <h1>Top Localities in India</h1>
            <LocalityCarousel/>
        </div>
    );
}   