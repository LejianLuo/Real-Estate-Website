import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LocalityCard from './LocalityCard';

export default function LocalityCarousel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <LocalityCard/>
        <LocalityCard/>
        <LocalityCard/>
        <LocalityCard/>
        <LocalityCard/>
        <LocalityCard/>
      </Tabs>
    </Box>
  );
}