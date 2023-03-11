import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SellIcon from '@mui/icons-material/Sell';

export default function NewsMenu() {
  let menuItems=(
        <MenuItem>
          <ListItemIcon>
            <SellIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Current Trends</ListItemText>
        </MenuItem>
  );
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>

        {Array(12).fill(0).map(()=>{
        return (<>{menuItems}<Divider /></>)}
        )}
        
      </MenuList>
    </Paper>
  );
}