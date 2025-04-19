import { Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Stack 
      direction="row" 
      spacing={{ xs: 0.5, sm: 1, md: 1.5 }} 
      sx={{ 
        ml: 'auto',
        '& .MuiButton-root': {
          minWidth: { xs: '60px', sm: 'auto' }
        }
      }}
    >
      <Button
        component={Link}
        to="/"
        variant={location.pathname === '/' ? "contained" : "text"}
        sx={{ 
          color: '#fff',
          minHeight: { xs: '36px', md: '40px' },
          height: { xs: '36px', md: '40px' },
          padding: { xs: '0 12px', md: '0 20px' },
          fontSize: { xs: '0.875rem', md: '1rem' },
          textTransform: 'none',
          borderRadius: '4px',
          '&.MuiButton-contained': {
            backgroundColor: '#4fc3f7',
            '&:hover': {
              backgroundColor: '#3da8d9'
            }
          },
          '&.MuiButton-text': {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }}
      >
        Home
      </Button>
      <Button
        component={Link}
        to="/about"
        variant={location.pathname === '/about' ? "contained" : "text"}
        sx={{ 
          color: '#fff',
          minHeight: { xs: '36px', md: '40px' },
          height: { xs: '36px', md: '40px' },
          padding: { xs: '0 12px', md: '0 20px' },
          fontSize: { xs: '0.875rem', md: '1rem' },
          textTransform: 'none',
          borderRadius: '4px',
          '&.MuiButton-contained': {
            backgroundColor: '#4fc3f7',
            '&:hover': {
              backgroundColor: '#3da8d9'
            }
          },
          '&.MuiButton-text': {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }}
      >
        About
      </Button>
      <Button
        component={Link}
        to="/blogs"
        variant={location.pathname === '/blogs' ? "contained" : "text"}
        sx={{ 
          color: '#fff',
          minHeight: { xs: '36px', md: '40px' },
          height: { xs: '36px', md: '40px' },
          padding: { xs: '0 12px', md: '0 20px' },
          fontSize: { xs: '0.875rem', md: '1rem' },
          textTransform: 'none',
          borderRadius: '4px',
          '&.MuiButton-contained': {
            backgroundColor: '#4fc3f7',
            '&:hover': {
              backgroundColor: '#3da8d9'
            }
          },
          '&.MuiButton-text': {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }}
      >
        Blogs
      </Button>
    </Stack>
  );
};

export default Navigation; 