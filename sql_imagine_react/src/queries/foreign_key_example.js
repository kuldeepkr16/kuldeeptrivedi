export const foreign_key_example_query = {
  title: "FOREIGN KEY Constraint Example",
  description: "Demonstrates how to define a FOREIGN KEY constraint when creating a table.",
  sql: `CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);`,
  explanation: `A FOREIGN KEY constraint enforces a link between the data in two tables.\nIn this example, department_id in courses must match an id in the departments table.\nThis ensures referential integrity between courses and departments.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, name: 'Mathematics', department_id: 1 },
    { id: 2, name: 'Physics', department_id: 2 }
  ],
  columns: ['id', 'name', 'department_id']
}; 