import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material';

const Python = () => {
  const concepts = [
    {
      id: 1,
      title: 'Print Statement',
      description: 'The print statement is one of the most basic and frequently used functions in Python. It allows you to output text and variables to the console.',
      code: 'print("Hello, World!")\nname = "Python"\nprint(f"Welcome to {name}")',
      explanation: 'The print() function can output strings, variables, and expressions. You can use f-strings (formatted string literals) to embed variables within strings. The print function automatically adds a newline character at the end of the output.'
    }
  ];

  const ConceptDisplay = ({ concept }) => (
    <Box sx={{ 
      mb: 4,
      backgroundColor: '#1a1a1a',
      borderRadius: 2,
      p: 3,
      border: '1px solid #404040'
    }}>
      <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>{concept.title}</Typography>
      
      <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2, mb: 2 }}>
        <Typography variant="body1" sx={{ color: '#fff' }}>
          {concept.description}
        </Typography>
      </Paper>

      {concept.code && (
        <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>Example Code:</Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#4fc3f7',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap'
            }}
          >
            {concept.code}
          </Typography>
        </Paper>
      )}

      {concept.code && (
        <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>Output:</Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#fff',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              backgroundColor: '#1a1a1a',
              padding: 2,
              borderRadius: 1
            }}
          >
            Hello, World!
            Welcome to Python
          </Typography>
        </Paper>
      )}

      {concept.explanation && (
        <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2 }}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>Explanation:</Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            {concept.explanation}
          </Typography>
        </Paper>
      )}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff' }}>
              Python Programming Concepts
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#fff' }}>
              Master Python programming with our comprehensive guide covering essential concepts and examples.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mb: 3,
                gap: 2
              }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#4fc3f7', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  minWidth: '120px',
                  textAlign: 'center'
                }}
              >
                Concept 1 of 1
              </Typography>
            </Box>

            <ConceptDisplay concept={concepts[0]} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Python; 