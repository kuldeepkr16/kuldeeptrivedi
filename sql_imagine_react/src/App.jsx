import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Card,
  CardContent,
  Drawer,
  ListItemIcon,
  Divider,
  TextField,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight,
  Home,
  Code,
  Info,
  Article
} from '@mui/icons-material';
import { getStudents, getMarks } from './utils/dataLoader';
import { getOrderedQueries } from './queries';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Python from './pages/Python';
import SQL from './pages/SQL';
import { keyframes } from '@emotion/react';
import Header from './components/Header';
import Footer from './components/Footer';

// Add keyframes animation at the top of the file after imports
const blinkingAnimation = keyframes`
  0% {
    opacity: 0.7;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.1);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 15px rgba(79, 195, 247, 0.2);
  }
  100% {
    opacity: 0.7;
    box-shadow: 0 0 10px rgba(79, 195, 247, 0.1);
  }
`;

const moveStars = keyframes`
  from {
    transform: translateZ(0px);
    opacity: 0.3;
  }
  to {
    transform: translateZ(600px);
    opacity: 0;
  }
`;

// Add these keyframes animations after imports
const starAnimation1 = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const starAnimation2 = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(50%, -50%);
  }
`;

const starAnimation3 = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-50%, 50%);
  }
`;

// Theme configuration
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4fc3f7',
    },
  },
});

// Static Table Component
const StaticTable = ({ data, columns, title }) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

// Sidebar Component
const Sidebar = ({ show, handleClose, queries, currentIndex, onQuerySelect, type = 'sql' }) => {
  const concepts = type === 'python' ? [
    {
      id: 1,
      title: 'Print Statement',
      description: 'The print statement is one of the most basic and frequently used functions in Python. It allows you to output text and variables to the console.',
      code: 'print("Hello, World!")\nname = "Python"\nprint(f"Welcome to {name}")',
      explanation: 'The print() function can output strings, variables, and expressions. You can use f-strings (formatted string literals) to embed variables within strings. The print function automatically adds a newline character at the end of the output.'
    }
  ] : queries;

  return (
    <div 
      className={`sidebar ${show ? 'show' : ''}`}
      style={{
        width: '375px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        position: 'fixed',
        top: '64px',
        left: show ? '0' : '-375px',
        height: 'calc(100vh - 64px)',
        transition: 'left 0.3s ease',
        zIndex: 1200,
        borderRight: '1px solid #404040',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className="p-3 border-bottom border-secondary">
        <h5 className="mb-0 pt-4">{type === 'python' ? 'Python Concepts' : 'Query Index'}</h5>
      </div>
      <div 
        className="flex-grow-1 overflow-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4fc3f7 #1a1a1a',
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#1a1a1a',
            borderRadius: '4px'
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
        <List className="p-3">
          {concepts.map((item, index) => (
            <ListItem 
              key={index}
              button
              onClick={() => onQuerySelect(index)}
              className={currentIndex === index ? 'bg-primary' : ''}
              sx={{
                '&:hover': {
                  backgroundColor: '#3d3d3d',
                },
                borderRadius: '4px',
                mb: 1,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1,
                padding: '8px 12px'
              }}
            >
              <Typography 
                sx={{ 
                  color: '#4fc3f7',
                  minWidth: '30px',
                  fontWeight: currentIndex === index ? 'bold' : 'normal',
                  fontSize: '0.95rem'
                }}
              >
                {(index + 1).toString().padStart(2, '0')}.
              </Typography>
              <Typography 
                sx={{
                  color: currentIndex === index ? '#fff' : '#4fc3f7',
                  fontWeight: currentIndex === index ? 'bold' : 'normal',
                  fontSize: '0.95rem',
                  flex: 1
                }}
              >
                {item.title}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

// Home Screen Component
const HomeScreen = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        gap: 4,
        p: 3,
        position: 'relative'
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card
            component={Link}
            to="/sql"
            sx={{
              maxWidth: 400,
              backgroundColor: 'rgba(26, 26, 26, 0.8)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(79, 195, 247, 0.2)',
              cursor: 'pointer',
              '&:hover': {
                boxShadow: '0 0 20px rgba(79, 195, 247, 0.3)',
                transform: 'translateY(-5px)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  color: '#4fc3f7',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  mb: 2
                }}
              >
                SQL Queries
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  textAlign: 'center'
                }}
              >
                Explore and learn SQL queries with interactive examples
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            component={Link}
            to="/python"
            sx={{
              maxWidth: 400,
              backgroundColor: 'rgba(26, 26, 26, 0.8)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(79, 195, 247, 0.2)',
              cursor: 'pointer',
              '&:hover': {
                boxShadow: '0 0 20px rgba(79, 195, 247, 0.3)',
                transform: 'translateY(-5px)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  color: '#4fc3f7',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  mb: 2
                }}
              >
                Python Concepts
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  textAlign: 'center'
                }}
              >
                Master Python programming with comprehensive examples
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

// Main App Component
const App = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const queries = useMemo(() => getOrderedQueries(), []);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isSQLPage = location.pathname === '/sql';
  const isPythonPage = location.pathname === '/python';

  const handleQuerySelect = (index) => {
    setCurrentQueryIndex(index);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'SQL Query', path: '/sql' },
    { label: 'Python', path: '/python' },
    { label: 'About', path: '/about' },
    { label: 'Blogs', path: '/blogs' }
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowY: 'auto',
        backgroundColor: '#0a0a0a',
        '&:before, &:after, & > div:first-of-type': {
          content: '""',
          position: 'fixed',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          background: 'radial-gradient(2px 2px at 40px 60px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 20px 50px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 30px 100px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 60px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 110px 90px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 190px 150px, #fff, rgba(0,0,0,0))',
          backgroundSize: '200px 200px',
          animation: `${starAnimation1} 30s linear infinite`,
          opacity: 0.3,
        },
        '&:after': {
          background: 'radial-gradient(2px 2px at 50px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 170px 120px, #fff, rgba(0,0,0,0))',
          backgroundSize: '400px 400px',
          animation: `${starAnimation2} 40s linear infinite`,
          opacity: 0.4,
        },
        '& > div:first-of-type:after': {
          content: '""',
          position: 'fixed',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          background: 'radial-gradient(2px 2px at 150px 120px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 70px 90px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 110px 130px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 180px 60px, #fff, rgba(0,0,0,0))',
          backgroundSize: '300px 300px',
          animation: `${starAnimation3} 35s linear infinite`,
          opacity: 0.35,
        },
        '&::-webkit-scrollbar': {
          width: '8px'
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
      }}>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} />
        
        <Header 
          menuItems={isSQLPage || isPythonPage ? null : menuItems}
          onMenuClick={isSQLPage || isPythonPage ? () => setSidebarShow(!sidebarShow) : null}
          showSidebarToggle={isSQLPage || isPythonPage}
        />

        <Box sx={{ 
          height: { xs: '48px', md: '56px' },
          width: '100%',
          flexShrink: 0
        }} />

        <Box sx={{ 
          flex: 1,
          position: 'relative',
          display: 'flex',
          width: '100%',
          pt: { xs: 0, md: 1 }
        }}>
          {(isSQLPage || isPythonPage) && (
            <Sidebar 
              show={sidebarShow}
              handleClose={() => setSidebarShow(false)}
              queries={queries}
              currentIndex={currentQueryIndex}
              onQuerySelect={handleQuerySelect}
              type={isPythonPage ? 'python' : 'sql'}
            />
          )}

          <Container 
            sx={{ 
              marginLeft: { xs: 0, md: sidebarShow && (isSQLPage || isPythonPage) ? '375px' : '0' },
              transition: 'margin-left 0.3s ease',
              width: { xs: '100%', md: sidebarShow && (isSQLPage || isPythonPage) ? 'calc(100% - 375px)' : '100%' },
              maxWidth: 'none !important',
              position: 'relative',
              zIndex: 1100,
              py: { xs: 0, md: 1 },
              display: 'flex',
              flexDirection: 'column',
              px: '0 !important'
            }}
          >
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/sql" element={
                <SQL
                  queries={queries}
                  currentQueryIndex={currentQueryIndex}
                  setCurrentQueryIndex={setCurrentQueryIndex}
                />
              } />
              <Route path="/python" element={<Python />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </Container>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App; 