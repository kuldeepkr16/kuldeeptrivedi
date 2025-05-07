export const create_table_example_query = {
  title: "CREATE TABLE Example",
  description: "Demonstrates how to create a new table for storing courses.",
  sql: `CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  credits INTEGER,
  department_id INTEGER
);`,
  explanation: `The CREATE TABLE statement defines a new table in the database.\nThis example creates a 'courses' table with columns for id, name, credits, and department_id.\nPRIMARY KEY uniquely identifies each row. NOT NULL means the column must have a value.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, name: 'Mathematics', credits: 4, department_id: 1 },
    { id: 2, name: 'Physics', credits: 3, department_id: 2 }
  ],
  columns: ['id', 'name', 'credits', 'department_id']
}; 