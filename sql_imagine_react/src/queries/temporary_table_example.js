export const temporary_table_example_query = {
  title: "Temporary Table Example",
  description: "Demonstrates how to create and use a temporary table in SQL.",
  sql: `CREATE TEMP TABLE temp_students AS
SELECT * FROM students WHERE grade = 'A';

SELECT * FROM temp_students;`,
  explanation: `A temporary table exists only for the duration of a session or transaction.\nThis example creates a temp table of students with grade 'A' and selects from it.`,
  // This is a static example; in a real app, you would use the temp table in a session.
  result: async () => [
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 3, name: 'Alice Johnson', grade: 'A' }
  ],
  columns: ['id', 'name', 'grade']
}; 