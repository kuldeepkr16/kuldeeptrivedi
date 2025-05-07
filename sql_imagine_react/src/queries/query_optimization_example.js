export const query_optimization_example_query = {
  title: "Query Optimization Example",
  description: "Demonstrates a best practice for query optimization in SQL.",
  sql: `-- Avoid SELECT *
SELECT id, name FROM students WHERE grade = 'A';

-- Use EXISTS instead of IN for subqueries
SELECT name FROM students s WHERE EXISTS (
  SELECT 1 FROM marks m WHERE m.student_id = s.id AND m.marks > 90
);`,
  explanation: `Query optimization involves writing efficient SQL.\nAvoid SELECT * to reduce data transfer, and use EXISTS for subqueries to improve performance.`,
  // This is a static example; in a real app, you would measure performance.
  result: async () => [
    { tip: 'Avoid SELECT * for better performance.' },
    { tip: 'Use EXISTS instead of IN for subqueries.' }
  ],
  columns: ['tip']
}; 