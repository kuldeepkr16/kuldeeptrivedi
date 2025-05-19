import React from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Grid
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { getOrderedPythonConcepts } from '../python_concepts';

const CodeBlock = ({ code }) => (
  <Paper sx={{ backgroundColor: '#23272e', p: 2, mb: 2, overflowX: 'auto' }}>
    <pre style={{ margin: 0, color: '#4fc3f7', fontFamily: 'monospace', fontSize: '1rem' }}>{code}</pre>
  </Paper>
);

const PythonConceptDisplay = ({ concept }) => (
  <Box sx={{ mb: 4, backgroundColor: '#1a1a1a', borderRadius: 2, p: 3, border: '1px solid #404040' }}>
    <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>{concept.title}</Typography>
    <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2, mb: 2 }}>
      <Typography variant="body1" sx={{ color: '#fff' }}>{concept.description}</Typography>
    </Paper>
    <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>Python Code:</Typography>
    <CodeBlock code={concept.code} />
    <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2, mb: 2 }}>
      <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>Explanation:</Typography>
      <Typography variant="body1" sx={{ color: '#fff' }}>{concept.explanation}</Typography>
    </Paper>
    <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2 }}>
      <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>Output:</Typography>
      <Typography variant="body1" sx={{ color: '#4fc3f7', fontFamily: 'monospace' }}>{concept.result}</Typography>
    </Paper>
  </Box>
);

const PythonView = ({ concepts, currentConceptIndex, setCurrentConceptIndex }) => {
  const allConcepts = concepts || getOrderedPythonConcepts();
  const [localIndex, setLocalIndex] = React.useState(0);
  const index = typeof currentConceptIndex === 'number' ? currentConceptIndex : localIndex;
  const setIndex = setCurrentConceptIndex || setLocalIndex;

  return (
    <Box sx={{ width: '100%', maxWidth: 'none', margin: 0, padding: 0, mt: { xs: 0, md: 1 } }}>
      <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
        <Grid item xs={12} md={12}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', pr: { xs: 1, md: 2 }, pl: { xs: 1, md: 0 }, flex: 1, mt: { xs: 0, md: 0 } }}>
            <Box sx={{ width: '100%', position: 'relative', flex: 1 }}>
              <div className="bg-dark p-4 rounded border border-secondary" style={{ height: '100%', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, gap: 2 }}>
                  {index > 0 && (
                    <IconButton
                      onClick={() => setIndex(prev => Math.max(0, prev - 1))}
                      sx={{ color: '#4fc3f7', padding: '8px', transition: 'all 0.3s ease', '&:hover': { color: '#81d4fa', transform: 'scale(1.1)' } }}
                    >
                      <ChevronLeft />
                    </IconButton>
                  )}
                  <Typography variant="subtitle1" sx={{ color: '#4fc3f7', fontWeight: 'bold', fontSize: '1.1rem', minWidth: '120px', textAlign: 'center' }}>
                    Concept {index + 1} of {allConcepts.length}
                  </Typography>
                  {index < allConcepts.length - 1 && (
                    <IconButton
                      onClick={() => setIndex(prev => Math.min(allConcepts.length - 1, prev + 1))}
                      sx={{ color: '#4fc3f7', padding: '8px', transition: 'all 0.3s ease', '&:hover': { color: '#81d4fa', transform: 'scale(1.1)' } }}
                    >
                      <ChevronRight />
                    </IconButton>
                  )}
                </Box>
                <PythonConceptDisplay concept={allConcepts[index]} />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PythonView; 