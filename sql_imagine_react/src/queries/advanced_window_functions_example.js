export const advanced_window_functions_example_query = {
  title: "Advanced Window Functions Example",
  description: "Demonstrates advanced window function features: frame specification, exclusion, and advanced aggregates.",
  sql: `SELECT
  id,
  value,
  SUM(value) OVER (
    ORDER BY id
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    EXCLUDE CURRENT ROW
  ) AS sum_last_2
FROM numbers;`,
  explanation: `This example uses a window frame to sum the last 2 values (excluding the current row) for each row.\nAdvanced window functions allow for complex analytics directly in SQL.`,
  result: async () => [
    { id: 1, value: 10, sum_last_2: null },
    { id: 2, value: 20, sum_last_2: 10 },
    { id: 3, value: 30, sum_last_2: 30 },
    { id: 4, value: 40, sum_last_2: 50 }
  ],
  columns: ['id', 'value', 'sum_last_2']
}; 