import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation(); 

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  const navLinks = [
    { text: t('nav.home'), path: '/' },
    { text: t('nav.about'), path: '/about' },
    { text: t('nav.portfolio'), path: '/portfolio' },
    { text: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
    <AppBar
  position="static"
  sx={{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    boxShadow: 'none',
  }}
>
  <Toolbar
    sx={{
      justifyContent: 'space-between', 
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    
    <Box
      sx={{
        display: 'flex',
        gap: '1rem', 
        alignItems: 'center',
      }}
    >
      <Button
      onClick={() => changeLanguage('sv')}
      color="inherit"
      sx={{
        textTransform: 'none',
        }}
      >
        SWE
      </Button>
      <Button
       onClick={() => changeLanguage('en')} 
       color="inherit"
       sx={{
         textTransform: 'none',
        }}
      >
        ENG
      </Button>
    </Box>

    
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
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', my: 2 }}>
            <Button onClick={() => changeLanguage('sv')} sx={{ textTransform: 'none' }}>
              SWE
            </Button>
            <Button onClick={() => changeLanguage('en')} sx={{ textTransform: 'none' }}>
              ENG
            </Button>
          </Box>

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
