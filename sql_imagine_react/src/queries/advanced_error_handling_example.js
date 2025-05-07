export const advanced_error_handling_example_query = {
  title: "Advanced Error Handling Example",
  description: "Demonstrates custom exception handling and transaction rollback in SQL.",
  sql: `DO $$
BEGIN
  BEGIN
    -- Try to insert a duplicate key
    INSERT INTO users(id, name) VALUES (1, 'Alice');
  EXCEPTION WHEN unique_violation THEN
    RAISE EXCEPTION 'Duplicate key error: user already exists';
  END;
  -- Simulate another error
  IF 1 = 1 THEN
    RAISE EXCEPTION 'Simulated error, rolling back transaction';
  END IF;
END $$;`,
  explanation: `This example shows how to catch specific exceptions (like unique_violation) and raise custom errors.\nIt also demonstrates how to force a transaction rollback by raising an exception.`,
  result: async () => [
    { message: "Transaction rolled back due to simulated error. Custom exception raised for duplicate key." }
  ],
  columns: ['message']
}; 