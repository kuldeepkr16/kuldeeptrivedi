export const permissions_example_query = {
  title: "Permissions Example (GRANT, REVOKE)",
  description: "Demonstrates how to grant and revoke permissions in SQL.",
  sql: `GRANT SELECT, INSERT ON students TO analyst;
REVOKE INSERT ON students FROM analyst;`,
  explanation: `GRANT gives specific privileges to a user or role, while REVOKE removes them.\nThis example grants SELECT and INSERT on the students table to the analyst role, then revokes INSERT.`,
  // This is a static example; in a real app, you would execute DCL.
  result: async () => [
    { user: 'analyst', privilege: 'SELECT', status: 'GRANTED' },
    { user: 'analyst', privilege: 'INSERT', status: 'REVOKED' }
  ],
  columns: ['user', 'privilege', 'status']
}; 