export const optimizing_query_example_query = {
  title: "Optimizing Queries Example",
  description: "Demonstrates a best practice for optimizing queries using indexes.",
  sql: `-- Instead of:
SELECT * FROM students WHERE name LIKE '%son';

-- Use an index and avoid leading wildcard:
CREATE INDEX idx_students_name ON students(name);
SELECT * FROM students WHERE name LIKE 'John%';`,
  explanation: `Avoid leading wildcards in LIKE patterns to allow index usage.\nCreating an index on the searched column can greatly improve performance.\nThis example shows a slow query and an optimized version using an index.`,
  // This is a static example; in a real app, you would measure performance.
  result: async () => [
    { query: 'SELECT * FROM students WHERE name LIKE "%son";', performance: 'Slow (no index used)' },
    { query: 'SELECT * FROM students WHERE name LIKE "John%";', performance: 'Fast (index used)' }
  ],
  columns: ['query', 'performance']
}; 