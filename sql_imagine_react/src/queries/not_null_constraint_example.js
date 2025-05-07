export const not_null_constraint_example_query = {
  title: "NOT NULL Constraint Example",
  description: "Demonstrates how to define a NOT NULL constraint when creating a table.",
  sql: `CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL
);`,
  explanation: `A NOT NULL constraint ensures that a column cannot have a NULL value.\nIn this example, both name and position must have values for every employee.\nThis helps enforce data integrity by preventing missing information.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Developer' }
  ],
  columns: ['id', 'name', 'position']
}; 