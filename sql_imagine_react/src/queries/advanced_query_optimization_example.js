export const advanced_query_optimization_example_query = {
  title: "Advanced Query Optimization Example",
  description: "Demonstrates index-only scan and query plan analysis in SQL.",
  sql: `-- Create an index to support index-only scans
CREATE INDEX idx_email ON users(email);

-- Analyze a query plan
EXPLAIN (ANALYZE, BUFFERS)
SELECT email FROM users WHERE email LIKE 'a%';`,
  explanation: `Index-only scans allow the database to satisfy a query using only the index, without reading the table.\nEXPLAIN (ANALYZE, BUFFERS) shows the query plan and performance details.\nThis example creates an index and analyzes a query that can use an index-only scan.
`,
  result: async () => [
    { message: "Index created and query plan analyzed for index-only scan." }
  ],
  columns: ['message']
}; 