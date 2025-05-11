import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  IconButton
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { getStudents, getMarks } from '../utils/dataLoader';

// Static Table Component
const StaticTable = ({ data, columns, title }) => {
  const [tableData, setTableData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        if (typeof data === 'function') {
          const result = await data();
          setTableData(result);
        } else {
          setTableData(data);
        }
      } catch (error) {
        setTableData([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [data]);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#fff', 
          mb: 1,
          pl: 1,
          fontSize: '1rem',
          fontWeight: 'bold'
        }}
      >
        {title}
      </Typography>
      <TableContainer 
        component={Paper} 
        className="table-responsive"
        sx={{ 
          backgroundColor: '#1a1a1a',
          maxHeight: '300px',
          overflow: 'auto',
          borderRadius: '8px',
          border: '1px solid #404040',
          '& .MuiTable-root': {
            borderCollapse: 'separate',
            borderSpacing: 0,
          },
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#1a1a1a'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#4fc3f7',
            borderRadius: '4px',
            '&:hover': {
              background: '#81d4fa'
            }
          }
        }}
      >
        <Table stickyHeader className="table table-dark table-striped table-hover">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column}
                  sx={{
                    backgroundColor: '#121212 !important',
                    color: '#4fc3f7',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    padding: '12px 16px',
                    borderBottom: '1px solid #404040',
                    whiteSpace: 'nowrap',
                    position: 'sticky',
                    top: 0,
                    zIndex: 2
                  }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell 
                  colSpan={columns.length} 
                  align="center" 
                  sx={{ 
                    color: '#fff',
                    padding: '16px',
                    borderBottom: '1px solid #404040'
                  }}
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              tableData.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(79, 195, 247, 0.08) !important'
                    }
                  }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column}
                      sx={{
                        color: '#fff',
                        borderBottom: '1px solid #404040',
                        borderRight: '1px solid #404040',
                        padding: '8px 16px',
                        fontSize: '0.875rem',
                        backgroundColor: '#1a1a1a',
                        '&:last-child': {
                          borderRight: 'none'
                        }
                      }}
                    >
                      {row[column]?.toString() || ''}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Query Result Component
const QueryResult = ({ data, columns }) => {
  const [resultData, setResultData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        if (typeof data === 'function') {
          const result = await data();
          setResultData(result);
        } else {
          setResultData(data);
        }
      } catch (error) {
        setResultData([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [data]);

  return (
    <Box sx={{ 
      backgroundColor: '#1a1a1a',
      borderRadius: 2,
      p: 3,
      border: '1px solid #404040'
    }}>
      <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
        {loading ? 'Loading...' : `Query Output (${resultData.length} rows):`}
      </Typography>
      {!loading && (
        <TableContainer 
          component={Paper} 
          sx={{ 
            backgroundColor: '#1a1a1a',
            minHeight: '400px',
            borderRadius: '8px',
            border: '1px solid #404040',
            '& .MuiTable-root': {
              borderCollapse: 'separate',
              borderSpacing: 0,
            }
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    sx={{
                      backgroundColor: '#121212',
                      color: '#4fc3f7',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      padding: '12px 16px',
                      borderBottom: '1px solid #404040',
                      whiteSpace: 'nowrap',
                      position: 'sticky',
                      top: 0,
                      zIndex: 1
                    }}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {resultData.length === 0 ? (
                <TableRow>
                  <TableCell 
                    colSpan={columns.length} 
                    align="center" 
                    sx={{ 
                      color: '#fff',
                      padding: '16px',
                      borderBottom: '1px solid #404040',
                      height: '360px',
                      verticalAlign: 'middle'
                    }}
                  >
                    No results found
                  </TableCell>
                </TableRow>
              ) : (
                resultData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      height: '40px',
                      '&:hover': {
                        backgroundColor: 'rgba(79, 195, 247, 0.08) !important'
                      }
                    }}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column}
                        sx={{
                          color: '#fff',
                          borderBottom: '1px solid #404040',
                          borderRight: '1px solid #404040',
                          padding: '8px 16px',
                          fontSize: '0.875rem',
                          '&:last-child': {
                            borderRight: 'none'
                          }
                        }}
                      >
                        {row[column]?.toString() || ''}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
              {resultData.length > 0 && resultData.length < 10 && (
                Array(10 - resultData.length).fill(null).map((_, index) => (
                  <TableRow 
                    key={`empty-${index}`}
                    sx={{ height: '40px' }}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column}
                        sx={{
                          color: '#fff',
                          borderBottom: '1px solid #404040',
                          borderRight: '1px solid #404040',
                          padding: '8px 16px',
                          '&:last-child': {
                            borderRight: 'none'
                          }
                        }}
                      >
                        &nbsp;
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

// Query Display Component
const QueryDisplay = ({ title, description, sql, explanation }) => (
  <Box sx={{ 
    mb: 4,
    backgroundColor: '#1a1a1a',
    borderRadius: 2,
    p: 3,
    border: '1px solid #404040'
  }}>
    <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>{title}</Typography>
    
    <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2, mb: 2 }}>
      <Typography variant="body1" sx={{ color: '#fff' }}>
        {description}
      </Typography>
    </Paper>

    <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2, mb: 2 }}>
      <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>SQL Query:</Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#4fc3f7',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap'
        }}
      >
        {sql}
      </Typography>
    </Paper>

    <Paper sx={{ backgroundColor: '#2d2d2d', padding: 2 }}>
      <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>Explanation:</Typography>
      <Typography variant="body1" sx={{ color: '#fff' }}>
        {explanation}
      </Typography>
    </Paper>
  </Box>
);

// SQL View Component
const SQL = ({ queries, currentQueryIndex, setCurrentQueryIndex }) => {
  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 'none',
      margin: 0,
      padding: 0,
      mt: { xs: 0, md: 1 }
    }}>
      <Grid container spacing={2} sx={{ 
        width: '100%',
        margin: 0
      }}>
        {/* Left Column - Static Tables */}
        <Grid item xs={12} md={4.5} sx={{ 
          padding: 0,
          order: { xs: 2, md: 1 }
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2, 
            pl: { xs: 1, md: 2 }, 
            pr: { xs: 1, md: 1 },
            width: '100%',
            mt: { xs: 0, md: 0 }
          }}>
            <StaticTable
              title="Students Table"
              data={getStudents}
              columns={['id', 'name', 'age', 'grade', 'department_id']}
            />
            <StaticTable
              title="Marks Table"
              data={getMarks}
              columns={['id', 'student_id', 'subject', 'marks']}
            />
          </Box>
        </Grid>

        {/* Right Column - Query Section */}
        <Grid item xs={12} md={7.5} sx={{ 
          padding: 0, 
          display: 'flex', 
          width: '100%',
          order: { xs: 1, md: 2 }
        }}>
          <Box sx={{ 
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            pr: { xs: 1, md: 2 },
            pl: { xs: 1, md: 0 },
            flex: 1,
            mt: { xs: 0, md: 0 }
          }}>
            <Box 
              sx={{ 
                width: '100%',
                position: 'relative',
                flex: 1
              }}
            >
              <div className="bg-dark p-4 rounded border border-secondary" style={{ 
                height: '100%', 
                width: '100%'
              }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 3,
                    gap: 2
                  }}
                >
                  {currentQueryIndex > 0 && (
                    <IconButton
                      onClick={() => setCurrentQueryIndex(prev => Math.max(0, prev - 1))}
                      sx={{
                        color: '#4fc3f7',
                        padding: '8px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#81d4fa',
                          transform: 'scale(1.1)'
                        }
                      }}
                    >
                      <ChevronLeft />
                    </IconButton>
                  )}

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
                    Query {currentQueryIndex + 1} of {queries.length}
                  </Typography>

                  {currentQueryIndex < queries.length - 1 && (
                    <IconButton
                      onClick={() => setCurrentQueryIndex(prev => Math.min(queries.length - 1, prev + 1))}
                      sx={{
                        color: '#4fc3f7',
                        padding: '8px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#81d4fa',
                          transform: 'scale(1.1)'
                        }
                      }}
                    >
                      <ChevronRight />
                    </IconButton>
                  )}
                </Box>
                <Box sx={{ mb: 3 }}>
                  <QueryDisplay
                    title={queries[currentQueryIndex].title}
                    description={queries[currentQueryIndex].description}
                    sql={queries[currentQueryIndex].sql}
                    explanation={queries[currentQueryIndex].explanation}
                  />
                </Box>
                
                <QueryResult
                  data={queries[currentQueryIndex].result}
                  columns={queries[currentQueryIndex].columns}
                />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SQL; 