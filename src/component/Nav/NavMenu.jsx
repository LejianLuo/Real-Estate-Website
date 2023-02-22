import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './css/NavMenu.css';



export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div 
    >
      <Button
        variant="text"
        id="dropdown-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={
          <KeyboardArrowDownIcon sx={{color:'white'}}/>
        }
        onClick={handleClick}
        
      >
        Nav
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>PlaceHolder</MenuItem>
        <MenuItem onClick={handleClose}>PlaceHolder</MenuItem>
        <MenuItem onClick={handleClose}>PlaceHolder</MenuItem>
        <MenuItem onClick={handleClose}>PlaceHolder</MenuItem>
        <MenuItem onClick={handleClose}>PlaceHolder</MenuItem>
        <MenuItem onClick={handleClose}>PlaceHolder</MenuItem>
      </Menu>
    </div>
  );
}
