import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NavMenu from './NavMenu'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './css/NavBar.css';


export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="navBarWrapper" >
      <Tabs 
      value={value} 
      onChange={handleChange} 
      left 
      TabIndicatorProps={{style: { display: 'none' }
  }}>
    <Tab icon={<Avatar alt="company logo" src="https://www.logodee.com/wp-content/uploads/2021/10/28.jpg" />} />
        <NavMenu/>
        <NavMenu/>
        <NavMenu/>
        <NavMenu/>
        <NavMenu/>
        <NavMenu/>
        <NavMenu/> 

        <Button id="leftBtn"variant='outlined' >intelligence</Button>

        <Button id='rightBtn'variant='outlined' >intelligence</Button>

        <Button id='loginBtn'variant='contained'>Login</Button>

        <FavoriteIcon id='favoriteBtn'/>
    </Tabs>
      
    </div>
  );
}

