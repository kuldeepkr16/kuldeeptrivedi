export const error_handling_example_query = {
  title: "Error Handling in SQL Example",
  description: "Demonstrates how to handle errors in SQL using exception blocks (if supported).",
  sql: `DO $$
BEGIN
  -- Try to insert a duplicate primary key
  INSERT INTO students(id, name) VALUES (1, 'Duplicate');
EXCEPTION WHEN unique_violation THEN
  RAISE NOTICE 'Duplicate key error handled!';
END $$;`,
  explanation: `Some databases support exception handling in procedural SQL.\nThis example shows how to catch and handle a unique constraint violation.`,
  // This is a static example; in a real app, you would see error handling in action.
  result: async () => [
    { message: 'Duplicate key error handled!' }
  ],
  columns: ['message']
}; 