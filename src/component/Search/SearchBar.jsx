import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as React from 'react';
import './css/SearchBar.css';
import RecentSearch from './RecentSearch';

export default function SearchArea(){
    return(
        <div id="background" >
            <div id="searchBarWrapper">
                <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                
                />
                <BudgetMenu/>
                <PropertyTypeMenu/>
                <Button id='searchBtn'variant='contained'>Search</Button>
            </div>
            <RecentSearch/>
        </div>
    );
}
function BudgetMenu() {
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
          variant="contained"
          id="menu-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          endIcon={
            <KeyboardArrowDownIcon sx={{color:'black'}}/>
          }
          onClick={handleClick}
         
        >
          Budget
        </Button>
        <Menu
          id="basic-menu"
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
  
  
  function PropertyTypeMenu() {
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
          variant="contained"
          id="menu-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          endIcon={
            <KeyboardArrowDownIcon sx={{color:'black'}}/>
          }
          onClick={handleClick}
         
        >
          Property Type
        </Button>
        <Menu
          id="basic-menu"
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
  
  