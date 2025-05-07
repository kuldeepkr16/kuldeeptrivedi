export const partitioning_example_query = {
  title: "Table Partitioning Example",
  description: "Demonstrates how to create a partitioned table in SQL.",
  sql: `CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  sale_date DATE NOT NULL,
  amount NUMERIC
) PARTITION BY RANGE (sale_date);

CREATE TABLE sales_2023 PARTITION OF sales FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');`,
  explanation: `Table partitioning splits a large table into smaller, more manageable pieces.\nThis example creates a sales table partitioned by date, with a partition for 2023.`,
  result: async () => [
    { id: 1, sale_date: '2023-02-15', amount: 100 },
    { id: 2, sale_date: '2023-07-10', amount: 250 }
  ],
  columns: ['id', 'sale_date', 'amount']
}; 