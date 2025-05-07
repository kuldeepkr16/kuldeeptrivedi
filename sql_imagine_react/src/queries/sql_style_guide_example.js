export const sql_style_guide_example_query = {
  title: "SQL Style Guide & Best Practices",
  description: "A summary of best practices for writing clean, maintainable SQL.",
  sql: `-- Use uppercase for keywords
SELECT id, name FROM students WHERE grade = 'A';

-- Use meaningful table/column names
-- Use consistent indentation and formatting
-- Avoid SELECT * in production queries
-- Add comments for complex logic
-- Prefer explicit JOINs over implicit
-- Use CTEs for readability
-- Avoid unnecessary subqueries
-- Use parameterized queries to prevent SQL injection`,
  explanation: `Follow a consistent style for SQL: use uppercase for keywords, meaningful names, consistent formatting, and comments.\nAvoid SELECT * in production, use explicit JOINs, and prefer CTEs for complex logic.\nAlways use parameterized queries to prevent SQL injection.`,
  result: async () => [
    { tip: 'Use uppercase for SQL keywords.' },
    { tip: 'Use meaningful table and column names.' },
    { tip: 'Avoid SELECT * in production queries.' },
    { tip: 'Add comments for complex logic.' },
    { tip: 'Use parameterized queries to prevent SQL injection.' }
  ],
  columns: ['tip']
}; 