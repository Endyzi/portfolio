import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, Typography, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
        position="sticky"
        sx={{
          backgroundColor: '#0F172A',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          zIndex: 1201,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: { xs: 56, md: 72 },
            px: { xs: 1, md: 4 },
          }}
        >
     

          {/* Middle: Nav Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              flexGrow: 1,
              //justifyContent: 'center',
              marginLeft: '0.1rem',
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
                  fontWeight: 800,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1rem',
                  px: 2,
                  color: '#F9FAFB',
                  '&:hover': {
                    color: '#06B6D4',
                    background: 'transparent',
                  },
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>

          {/* Right: Language toggle + social icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              onClick={() => changeLanguage('sv')}
              sx={{
                color: i18n.language === 'sv' ? '#06B6D4' : '#F9FAFB',
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                px: 1,
                transition: 'color 0.2s',
              }}
            >
              SWE
            </Button>
            <Button
              onClick={() => changeLanguage('en')}
              sx={{
                color: i18n.language === 'en' ? '#06B6D4' : '#F9FAFB',
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                px: 1,
                transition: 'color 0.2s',
              }}
            >
              ENG
            </Button>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/Endyzi"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#F9FAFB', '&:hover': { color: '#06B6D4' } }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/jonatan-nilhamn/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#F9FAFB', '&:hover': { color: '#06B6D4' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            {/* Hamburger for mobile */}
            <IconButton
              color="inherit"
              edge="end"
              sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, my: 2 }}>
            <Button onClick={() => changeLanguage('sv')} sx={{ textTransform: 'none', color: i18n.language === 'sv' ? '#06B6D4' : '#0F172A', fontWeight: 600 }}>SWE</Button>
            <Button onClick={() => changeLanguage('en')} sx={{ textTransform: 'none', color: i18n.language === 'en' ? '#06B6D4' : '#0F172A', fontWeight: 600 }}>ENG</Button>
            <IconButton component="a" href="https://github.com/Endyzi" target="_blank" rel="noopener noreferrer" sx={{ color: '#0F172A', '&:hover': { color: '#06B6D4' } }}><GitHubIcon /></IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/jonatan-nilhamn/" target="_blank" rel="noopener noreferrer" sx={{ color: '#0F172A', '&:hover': { color: '#06B6D4' } }}><LinkedInIcon /></IconButton>
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
