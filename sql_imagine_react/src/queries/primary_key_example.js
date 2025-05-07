export const primary_key_example_query = {
  title: "PRIMARY KEY Constraint Example",
  description: "Demonstrates how to define a PRIMARY KEY constraint when creating a table.",
  sql: `CREATE TABLE departments (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);`,
  explanation: `A PRIMARY KEY constraint uniquely identifies each row in a table.\nIn this example, the 'id' column is the primary key for the departments table.\nPRIMARY KEY columns must have unique, non-null values.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' }
  ],
  columns: ['id', 'name']
}; 