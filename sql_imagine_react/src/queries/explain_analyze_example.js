export const explain_analyze_example_query = {
  title: "EXPLAIN/ANALYZE Example",
  description: "Demonstrates how to use EXPLAIN and ANALYZE to analyze query performance.",
  sql: `EXPLAIN ANALYZE SELECT * FROM students WHERE grade = 'A';`,
  explanation: `EXPLAIN shows the execution plan for a query.\nANALYZE runs the query and provides actual timing and row counts.\nThis helps you understand and optimize query performance.`,
  // This is a static example; in a real app, you would run the query and get a real plan.
  result: async () => [
    { step: 'Seq Scan on students', cost: '0.00..1.05', rows: 2, actual_time: '0.01..0.02' }
  ],
  columns: ['step', 'cost', 'rows', 'actual_time']
}; 