import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import FinanceCard from './FinanceCard'

export default function FinanceCarousel() {
  

  const [value, setValue] = React.useState(0);
  const [img,setImg]=React.useState({
    '1':'https://www.squareyards.com/cdn-cgi/image/width=660,height=352,quality=80,fit=crop,gravity=auto,format=webp/assets/images/new-our-services/homePage/price-history-banner-v3.png',
    '2':'https://www.squareyards.com/cdn-cgi/image/width=660,height=352,quality=80,fit=crop,gravity=auto,format=webp/assets/images/new-our-services/homePage/escrow-banner-v3.png',
    '3':'https://www.squareyards.com/cdn-cgi/image/width=660,height=354,quality=80,fit=crop,gravity=auto,format=webp/assets/images/new-our-services/homePage/axis-banner-v3.png',
    '4':'https://www.squareyards.com/cdn-cgi/image/width=660,height=352,quality=80,fit=crop,gravity=auto,format=webp/assets/images/new-our-services/homePage/fractional_desktop_banner.png',
    '5':'https://www.squareyards.com/cdn-cgi/image/width=636,height=352,quality=80,fit=crop,gravity=auto,format=webp/assets/images/new-our-services/homePage/rent-agreement-banner-v3.png',
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{position:'relative',top:-120}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{style: { display: 'none' }
  }}>
    
       
        <FinanceCard imgSrc={img['1']} />
        <FinanceCard imgSrc={img['2']} />
        <FinanceCard imgSrc={img['3']} />
        <FinanceCard imgSrc={img['4']} />
        <FinanceCard imgSrc={img['5']} />
        
      </Tabs>
    </Box>
  );
}
