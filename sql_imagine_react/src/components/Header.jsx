import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Header = ({ menuItems, onMenuClick, showSidebarToggle = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSidebarClick = () => {
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar 
      position="fixed"
      className="navbar navbar-expand-lg navbar-dark"
      sx={{ 
        backgroundColor: '#121212',
        zIndex: 1300,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        height: { xs: '56px', md: '64px' },
        width: '100%'
      }}
    >
      <Container maxWidth={false}>
        <Toolbar 
          className="d-flex justify-content-between w-100" 
          sx={{ 
            minHeight: { xs: '56px !important', md: '64px !important' }, 
            height: { xs: '56px', md: '64px' },
            py: 0,
            px: { xs: 1, sm: 2, md: 3 }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {showSidebarToggle ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="sidebar"
                onClick={handleSidebarClick}
                sx={{ 
                  padding: '8px',
                  color: '#4fc3f7',
                  '&:hover': {
                    color: '#81d4fa',
                    transform: 'scale(1.1)'
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.5rem'
                  }
                }}
              >
                <MenuOpenIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ 
                  padding: '8px',
                  color: '#4fc3f7',
                  '&:hover': {
                    color: '#81d4fa',
                    transform: 'scale(1.1)'
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.5rem'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              onClick={handleLogoClick}
              sx={{
                fontWeight: 'normal',
                color: '#fff',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: '1.2',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '4px', md: '8px' },
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                '&:hover': {
                  color: '#4fc3f7',
                  transform: 'scale(1.05)',
                  transition: 'all 0.2s ease'
                }
              }}
            >
              <span style={{ fontWeight: 'bold' }}>Engineer</span>
              <span style={{ color: '#4fc3f7' }}>TheData</span>
            </Typography>
          </Box>

          {menuOpen && menuItems && (
            <Box
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'rgba(26, 26, 26, 0.95)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid rgba(79, 195, 247, 0.2)',
                zIndex: 1200
              }}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={item.path}
                    onClick={() => {
                      setMenuOpen(false);
                      if (item.onClick) {
                        item.onClick();
                      }
                    }}
                    sx={{
                      color: '#4fc3f7',
                      '&:hover': {
                        backgroundColor: 'rgba(79, 195, 247, 0.1)',
                        borderRadius: '4px'
                      }
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 