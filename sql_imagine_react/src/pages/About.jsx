import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => {
  const features = [
    'Interactive SQL query interface',
    'Real-time query execution',
    'Visual query results',
    'Multiple query examples',
    'Easy navigation between queries'
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About SQL Query Explorer
        </Typography>
        <Typography variant="body1" paragraph>
          SQL Query Explorer is a powerful tool designed to help you learn and practice SQL queries in an interactive environment. 
          Whether you're a beginner or an experienced developer, this tool provides a hands-on approach to understanding SQL concepts.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Features
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default About; 