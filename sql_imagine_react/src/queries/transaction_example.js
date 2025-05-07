export const transaction_example_query = {
  title: "Transaction Example (BEGIN, COMMIT, ROLLBACK)",
  description: "Demonstrates how to use transactions to group multiple SQL statements.",
  sql: `BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
  explanation: `A transaction is a sequence of SQL statements that are executed as a single unit.\nBEGIN starts the transaction, COMMIT saves the changes, and ROLLBACK undoes them if there is an error.\nThis example transfers 100 from account 1 to account 2 as an atomic operation.`,
  // This is a static example; in a real app, you would execute DML/DDL.
  result: async () => [
    { id: 1, balance: 900 },
    { id: 2, balance: 1100 }
  ],
  columns: ['id', 'balance']
}; 