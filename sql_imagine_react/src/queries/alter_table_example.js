export const alter_table_example_query = {
  title: "ALTER TABLE Example",
  description: "Demonstrates how to add a new column to an existing table using ALTER TABLE.",
  sql: `ALTER TABLE students ADD COLUMN email TEXT;`,
  explanation: `The ALTER TABLE statement is used to modify an existing table structure.\nThis example adds a new column called 'email' of type TEXT to the students table.\nYou can also use ALTER TABLE to drop or modify columns, or add constraints.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, name: 'John Doe', age: 20, grade: 'A', department_id: 1, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 21, grade: 'B', department_id: 2, email: 'jane@example.com' }
  ],
  columns: ['id', 'name', 'age', 'grade', 'department_id', 'email']
}; 