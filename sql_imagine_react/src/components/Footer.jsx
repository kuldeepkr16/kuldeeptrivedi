import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      position: 'fixed',
      bottom: '-40px',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      padding: '8px 16px',
      borderTop: '1px solid #404040',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40px',
      transition: 'bottom 0.3s ease',
      '&:hover': {
        bottom: 0
      },
      cursor: 'pointer'
    }}
  >
    <Typography variant="body2" sx={{ color: '#fff' }}>
      © 2024 SQL Query Explorer. All rights reserved.
    </Typography>
  </Box>
);

export default Footer; 