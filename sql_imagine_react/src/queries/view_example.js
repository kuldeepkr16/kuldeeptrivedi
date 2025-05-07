export const view_example_query = {
  title: "VIEW Example (CREATE VIEW, DROP VIEW)",
  description: "Demonstrates how to create and drop a view in SQL.",
  sql: `CREATE VIEW high_scorers AS
SELECT name, marks FROM students s
JOIN marks m ON s.id = m.student_id
WHERE marks > 90;

DROP VIEW high_scorers;`,
  explanation: `A VIEW is a virtual table based on the result of a SQL query.\nCREATE VIEW defines a view, and DROP VIEW removes it.\nThis example creates a view of students who scored above 90, then drops it.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { name: 'John Doe', marks: 95 },
    { name: 'Bob Wilson', marks: 92 }
  ],
  columns: ['name', 'marks']
}; 