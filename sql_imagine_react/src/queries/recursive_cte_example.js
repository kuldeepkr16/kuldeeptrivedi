export const recursive_cte_example_query = {
  title: "Recursive CTE Example",
  description: "Demonstrates how to use a recursive Common Table Expression (CTE) in SQL.",
  sql: `WITH RECURSIVE numbers(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM numbers WHERE n < 5
)
SELECT * FROM numbers;`,
  explanation: `A recursive CTE allows you to perform recursive queries, such as generating a sequence of numbers or traversing hierarchical data.\nThis example generates numbers from 1 to 5.`,
  // This is a static example; in a real app, you would use real recursive data.
  result: async () => [
    { n: 1 },
    { n: 2 },
    { n: 3 },
    { n: 4 },
    { n: 5 }
  ],
  columns: ['n']
}; 