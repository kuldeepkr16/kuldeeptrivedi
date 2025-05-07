export const advanced_permissions_example_query = {
  title: "Advanced Permissions Example",
  description: "Demonstrates row-level security (RLS) for fine-grained access control in SQL.",
  sql: `-- Enable row-level security on the table
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow only managers to see salary data
CREATE POLICY manager_salary_access
  ON employees
  FOR SELECT
  USING (role = 'manager');`,
  explanation: `Row-level security (RLS) allows you to control access to rows in a table based on the user executing the query.\nThis example enables RLS on the employees table and creates a policy so only managers can view salary data.`,
  result: async () => [
    { message: "RLS enabled and policy 'manager_salary_access' created on employees table." }
  ],
  columns: ['message']
}; 