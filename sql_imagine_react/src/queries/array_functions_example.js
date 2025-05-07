export const array_functions_example_query = {
  title: "Array Functions Example",
  description: "Demonstrates how to use array functions in SQL (if supported by the database).",
  sql: `SELECT id, tags
FROM articles
WHERE 'sql' = ANY(tags);`,
  explanation: `Some SQL databases support array columns and functions.\nThis example selects articles where the tags array contains 'sql'.`,
  // This is a static example; in a real app, you would use real array data.
  result: async () => [
    { id: 1, tags: ['sql', 'database', 'tutorial'] },
    { id: 2, tags: ['sql', 'performance'] }
  ],
  columns: ['id', 'tags']
}; 