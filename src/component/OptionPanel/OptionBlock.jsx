import * as React from 'react';
import OptionCard from './OptionCard'
import './css/OptionBlock.css'

export default function OptionBlock() {

  return (
    <>
    <h1 id='optionTitle'>Everything you Need at One Place</h1>
    <div id='optionBlock'>
    
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>

    </div>
    </>
  );
}