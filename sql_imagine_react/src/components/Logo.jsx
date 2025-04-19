import { Box, Typography } from '@mui/material';

const Logo = () => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center',
    flexShrink: 0
  }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'normal',
        color: '#fff',
        fontSize: { xs: '1rem', md: '1.2rem' },
        lineHeight: '1.2',
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '4px', md: '8px' },
        whiteSpace: 'nowrap'
      }}
    >
      <span style={{ fontWeight: 'bold' }}>Engineer</span>
      <span style={{ color: '#4fc3f7' }}>TheData</span>
    </Typography>
  </Box>
);

export default Logo; 