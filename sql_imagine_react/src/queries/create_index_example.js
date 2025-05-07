export const create_index_example_query = {
  title: "CREATE INDEX Example",
  description: "Demonstrates how to create an index on a table column.",
  sql: `CREATE INDEX idx_students_name ON students(name);`,
  explanation: `An index improves the speed of data retrieval operations on a table.\nIn this example, an index is created on the name column of the students table.\nIndexes are especially useful for large tables and columns that are frequently searched.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { message: "Index 'idx_students_name' created on students(name)." }
  ],
  columns: ['message']
}; 