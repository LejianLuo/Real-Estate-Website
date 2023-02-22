import * as React from 'react';
import { Button } from '@mui/material';
import  IntroductionCard from './IntroductionCard'
import './css/ProjectBlock.css';
import ProjectCarousel from './ProjectCarousel'
import Collection from './Collection'

export default function ProjectBlock() {
    const [featured,isFeatured]=React.useState(true);

  return (
    <div id='project'>
        <h1>New Real Estate Projects</h1>
        <Button id='featured'variant='contained' onClick={()=>isFeatured(true)} >Featured Properties</Button>
        <Button id='collection'variant='contained' onClick={()=>isFeatured(false)}>Collections</Button>
       
        {featured ?
         (<div style={{display:'flex'}}>
         < IntroductionCard/>
         <ProjectCarousel/></div>):<Collection/>
        }
       
 
    </div>
  );
}