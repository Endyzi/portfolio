import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Hem', path: '/' },
    { text: 'Om Mig', path: '/about' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Kontakt', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              display: { xs: 'block', md: 'block' },
              margin: { xs: '0 auto', md: '0' }, 
              flexGrow: { md: 0 },
            }}
          >
            
          </Typography>

          
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: '2rem',
              flexGrow: 1,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.text}
                color="inherit"
                component={Link}
                to={link.path}
                sx={{
                  textTransform: 'none',
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>

          
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.text} component={Link} to={link.path}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
