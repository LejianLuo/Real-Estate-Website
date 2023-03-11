import * as React from 'react';
import './css/CommercialBlock.css';

export default function CommercialBlock(){
    return(
        <section id='ads'>
            <div>
            <h1>Real Estate in </h1>
            <h1>your pocket</h1>
            <h3>With our app, spend less time searching and more time at your dream home. Download now!</h3>
            <img src='https://www.squareyards.com/assets/images/app-download/google-play.svg'/>
            <img src='https://www.squareyards.com/assets/images/app-download/google-play.svg'/>
            <img src='https://www.squareyards.com/assets/images/app-download/qr-code.svg'/>
            </div>
            <div>
            <img id='phone' src='https://www.squareyards.com/assets/images/app-download/desktop-app-screen.png'/>
            </div>
        </section>
    );
}