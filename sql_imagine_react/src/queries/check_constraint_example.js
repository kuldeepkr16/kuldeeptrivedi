export const check_constraint_example_query = {
  title: "CHECK Constraint Example",
  description: "Demonstrates how to define a CHECK constraint when creating a table.",
  sql: `CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL CHECK (price > 0)
);`,
  explanation: `A CHECK constraint ensures that all values in a column satisfy a specific condition.\nIn this example, the price must be greater than 0 for every product.\nThis helps enforce business rules at the database level.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 }
  ],
  columns: ['id', 'name', 'price']
}; 