import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import HouseIcon from '@mui/icons-material/House';
import Interest from './Interest';
import './css/InterestList.css';

export default function InterestList() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box id='interestTab'>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
        
      >

        <Interest text='Buy Properties' Icon={()=>{return (<HouseIcon/>)}}/>
        <Interest text='Rent Properties' Icon={()=>{return (<HouseIcon/>)}}/>
        <Interest text='New Projects'  Icon={()=>{return (<HouseIcon/>)}}/>
        <Interest text="Plot & Land"  Icon={()=>{return (<HouseIcon/>)}}/>
        <Interest text= 'Commerical Properties'  Icon={()=>{return (<HouseIcon/>)}}/>
        <Interest text='Find agents'  Icon={()=>{return (<HouseIcon/>)}}/>
       
      </Tabs>
    </Box>
  );
}
/*        <Tab value="one" label="Buy Properties" />
        <Tab value="two" label="Rent Properties" />
        <Tab value="three" label="New Projects" />
        <Tab value="four" label="Plot & Land" />
        <Tab value="five" label="Commerical Properties" />
        <Tab value="six" label="Find agents" /> */