export const advanced_index_example_query = {
  title: "Advanced Index Example",
  description: "Demonstrates a partial index in SQL.",
  sql: `CREATE INDEX idx_active_students ON students(name) WHERE active = true;`,
  explanation: `Partial indexes index only a subset of rows, improving performance and saving space.\nThis example creates an index on the name column for only active students.`,
  result: async () => [
    { message: "Partial index 'idx_active_students' created on students(name) WHERE active = true." }
  ],
  columns: ['message']
}; 