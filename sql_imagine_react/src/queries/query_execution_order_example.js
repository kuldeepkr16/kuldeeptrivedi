export const query_execution_order_example_query = {
  title: "Query Execution Order Example",
  description: "Demonstrates the logical order of SQL query execution.",
  sql: `SELECT department_id, COUNT(*)
FROM students
WHERE grade = 'A'
GROUP BY department_id
HAVING COUNT(*) > 1
ORDER BY department_id;`,
  explanation: `SQL queries are executed in a specific logical order: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT.\nThis example shows a query that uses most of these clauses.`,
  // This is a static example; in a real app, you would see the result of each step.
  result: async () => [
    { department_id: 1, count: 2 }
  ],
  columns: ['department_id', 'count']
}; 