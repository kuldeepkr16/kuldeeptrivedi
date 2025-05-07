export const unique_index_example_query = {
  title: "UNIQUE INDEX Example",
  description: "Demonstrates how to create a unique index on a table column.",
  sql: `CREATE UNIQUE INDEX idx_users_email ON users(email);`,
  explanation: `A UNIQUE INDEX ensures that all values in the indexed column are unique.\nIn this example, a unique index is created on the email column of the users table.\nThis prevents duplicate emails and improves lookup speed.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { message: "Unique index 'idx_users_email' created on users(email)." }
  ],
  columns: ['message']
}; 