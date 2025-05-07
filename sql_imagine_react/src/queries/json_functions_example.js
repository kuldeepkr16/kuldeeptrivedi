export const json_functions_example_query = {
  title: "JSON Functions Example",
  description: "Demonstrates how to use JSON functions in SQL (if supported by the database).",
  sql: `SELECT id, info->>'email' AS email
FROM users
WHERE info->'preferences'->>'newsletter' = 'true';`,
  explanation: `Many modern SQL databases support JSON functions for querying and manipulating JSON data.\nThis example extracts the email from a JSON column and filters users who have newsletter preference enabled.`,
  // This is a static example; in a real app, you would use real JSON data.
  result: async () => [
    { id: 1, email: 'alice@example.com' },
    { id: 2, email: 'bob@example.com' }
  ],
  columns: ['id', 'email']
}; 