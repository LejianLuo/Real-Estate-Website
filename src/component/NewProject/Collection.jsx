import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import './css/Collection.css';


export default function Collection() {
  
  const [img,setImg]=React.useState(imgList);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{overflow:'hidden'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{style: { display: 'none' }
  }}>
    <img className='collectionImg' src={img['1']}/>
    <img className='collectionImg' src={img['2']}/>
    <img className='collectionImg' src={img['3']}/>
    <img className='collectionImg' src={img['1']}/>
    <img className='collectionImg' src={img['2']}/>
        
      </Tabs>
    </Box>
  );
}
let imgList={
    '1':'https://static.squareyards.com/resources/images/gurgaon/tn-projectflagship/tn-m3m-antalya-hills-project-flagship1-6497.jpg',
    '2':'https://static.squareyards.com/resources/images/gurgaon/tn-projectflagship/tn-m3m-antalya-hills-project-flagship1-6497.jpg',
    '3':'https://static.squareyards.com/resources/images/noida/tn-projectflagship/tn-grandslam-ithum-project-flagship1.jpg',
    
  }