export const drop_table_example_query = {
  title: "DROP TABLE Example",
  description: "Demonstrates how to remove a table from the database using DROP TABLE.",
  sql: `DROP TABLE courses;`,
  explanation: `The DROP TABLE statement permanently removes a table and all its data from the database.\nUse this command with caution, as it cannot be undone.\nThis example drops the 'courses' table created earlier.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { message: "Table 'courses' has been dropped." }
  ],
  columns: ['message']
}; 