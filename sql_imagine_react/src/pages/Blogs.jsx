import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardHeader } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Getting Started with SQL Queries',
      date: 'March 15, 2024',
      excerpt: 'Learn the basics of SQL queries and how to write your first SELECT statement.'
    },
    {
      title: 'Advanced SQL Joins Explained',
      date: 'March 10, 2024',
      excerpt: 'A comprehensive guide to understanding different types of SQL joins and when to use them.'
    },
    {
      title: 'SQL Best Practices for Beginners',
      date: 'March 5, 2024',
      excerpt: 'Essential tips and tricks to write efficient and maintainable SQL queries.'
    },
    {
      title: 'Understanding SQL Subqueries',
      date: 'February 28, 2024',
      excerpt: 'Master the art of using subqueries to solve complex data retrieval problems.'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          SQL Learning Blog
        </Typography>
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                  title={post.title}
                  subheader={
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <CalendarTodayIcon sx={{ mr: 1, fontSize: '1rem' }} />
                      {post.date}
                    </Box>
                  }
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blogs; 