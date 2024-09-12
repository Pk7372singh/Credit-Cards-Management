import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <Button color="inherit" component={Link} to="/banks">Banks</Button>
        <Button color="inherit" component={Link} to="/credit-cards">Credit Cards</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
