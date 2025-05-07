export const unique_constraint_example_query = {
  title: "UNIQUE Constraint Example",
  description: "Demonstrates how to define a UNIQUE constraint when creating a table.",
  sql: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE,
  email TEXT UNIQUE
);`,
  explanation: `A UNIQUE constraint ensures that all values in a column are different.\nIn this example, both username and email must be unique in the users table.\nThis prevents duplicate usernames or emails from being inserted.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, username: 'alice', email: 'alice@example.com' },
    { id: 2, username: 'bob', email: 'bob@example.com' }
  ],
  columns: ['id', 'username', 'email']
}; 