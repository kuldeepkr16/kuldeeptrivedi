export const advanced_cte_example_query = {
  title: "Advanced CTE Example",
  description: "Demonstrates recursive and multiple CTEs, including materialized CTEs in SQL.",
  sql: `WITH RECURSIVE nums AS (
  SELECT 1 AS n
  UNION ALL
  SELECT n + 1 FROM nums WHERE n < 5
),
materialized_cte AS MATERIALIZED (
  SELECT n FROM nums
)
SELECT * FROM materialized_cte;`,
  explanation: `This example uses a recursive CTE to generate numbers from 1 to 5, then materializes the result for further use.\nMaterialized CTEs can improve performance by storing intermediate results.`,
  result: async () => [
    { n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }
  ],
  columns: ['n']
}; 