import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'How I Optimised a 13 Million Row PostgreSQL Migration',
      url: 'https://kuldeepkr16.medium.com/how-i-optimised-a-13-million-row-postgresql-migration-29ba91cedc8d',
      excerpt: 'Learn about optimizing large-scale PostgreSQL migrations with practical strategies and performance improvements.',
      date: '2025-08-16'
    },
    {
      title: 'DynamoDB Tables to Postgres Data Pipeline',
      url: 'https://kuldeepkr16.medium.com/dynamodb-tables-to-postgres-data-pipeline-4820b4af149b',
      excerpt: 'Building efficient data pipelines from DynamoDB to PostgreSQL with best practices and optimization techniques.',
      date: '2025-08-14'
    },
    {
      title: 'How We Reduced Sync Costs by 60% Using Incremental Strategy',
      url: 'https://kuldeepkr16.medium.com/how-we-reduced-sync-costs-by-60-using-incremental-strategy-039cabcdb7fb',
      excerpt: 'Cost optimization strategies for data synchronization using incremental approaches and smart engineering.',
      date: '2025-08-03'
    },
    {
      title: 'Unlocking the Power of Table-Valued Functions in PostgreSQL',
      url: 'https://kuldeepkr16.medium.com/unlocking-the-power-of-table-valued-functions-in-postgresql-5eb6a15dd85f',
      excerpt: 'Deep dive into PostgreSQL table-valued functions and their practical applications in data engineering.',
      date: '2024-12-20'
    },
    {
      title: 'How to Prepare for a Data Analyst Interview',
      url: 'https://kuldeepkr16.medium.com/how-to-prepare-for-a-data-analyst-interview-a3f824994404',
      excerpt: 'Comprehensive guide to ace your data analyst interview with technical and behavioral preparation tips.',
      date: '2024-12-15'
    },
    {
      title: 'Embedding QuickSight Dashboards with Flask',
      url: 'https://kuldeepkr16.medium.com/embedding-quicksight-dashboards-with-flask-ef4c271e2d4c',
      excerpt: 'Integrate AWS QuickSight dashboards into Flask applications for seamless data visualization.',
      date: '2024-10-15'
    },
    {
      title: 'Automate Materialized View Refresh',
      url: 'https://kuldeepkr16.medium.com/automate-materialized-view-refresh-eed94c1973b1',
      excerpt: 'Automating PostgreSQL materialized view refreshes for optimal data freshness and performance.',
      date: '2024-10-10'
    },
    {
      title: 'Query Optimization PostgreSQL',
      url: 'https://kuldeepkr16.medium.com/query-optimization-postgresql-9e616d9dc685',
      excerpt: 'Advanced PostgreSQL query optimization techniques for better database performance.',
      date: '2024-06-02'
    },
    {
      title: 'Investing with Project Kuber',
      url: 'https://kuldeepkr16.medium.com/investing-with-project-kuber-c4dabacf2808',
      excerpt: 'Exploring investment strategies and insights through the Project Kuber framework.',
      date: '2024-06-01'
    },
    {
      title: 'Redline a Redshift Pipeline',
      url: 'https://kuldeepkr16.medium.com/redline-a-redshift-pipeline-ca07d5e1ddcb',
      excerpt: 'Building and optimizing Amazon Redshift data pipelines for high-performance analytics.',
      date: '2024-06-01'
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Data Engineering Articles
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Explore my latest articles on data engineering, PostgreSQL optimization, AWS services, and data pipeline best practices.
        </Typography>
        
        <List sx={{ bgcolor: 'background.paper' }}>
          {blogPosts.map((post, index) => (
            <React.Fragment key={index}>
              <ListItem 
                disablePadding 
                sx={{ mb: 2 }}
              >
                <ListItemButton 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    py: 3,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.16)',
                      transform: 'translateY(-4px) scale(1.02)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          {post.title}
                        </Typography>
                        <LaunchIcon sx={{ ml: 1, color: 'primary.main' }} />
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        {post.excerpt}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              {index < blogPosts.length - 1 && <Divider sx={{ my: 2, backgroundColor: '#1976d2', height: '1px' }} />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Blogs; 