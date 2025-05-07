export const materialized_view_example_query = {
  title: "Materialized View Example",
  description: "Demonstrates how to create and refresh a materialized view in SQL.",
  sql: `CREATE MATERIALIZED VIEW top_students AS
SELECT name, AVG(marks) as avg_marks FROM students s
JOIN marks m ON s.id = m.student_id
GROUP BY name
HAVING AVG(marks) > 85;

REFRESH MATERIALIZED VIEW top_students;`,
  explanation: `A materialized view stores the result of a query physically and can be refreshed.\nThis example creates a materialized view of students with average marks above 85, and shows how to refresh it.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { name: 'John Doe', avg_marks: 92.5 },
    { name: 'Bob Wilson', avg_marks: 93.5 }
  ],
  columns: ['name', 'avg_marks']
}; 