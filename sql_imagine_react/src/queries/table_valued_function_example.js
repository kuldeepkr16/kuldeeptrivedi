export const table_valued_function_example_query = {
  title: "Table-Valued Function Example",
  description: "Demonstrates how to create and use a table-valued function in SQL.",
  sql: `CREATE FUNCTION students_in_department(dept_id INT)
RETURNS TABLE(id INT, name TEXT, grade TEXT) AS $$
  SELECT id, name, grade FROM students WHERE department_id = dept_id;
$$ LANGUAGE SQL;

SELECT * FROM students_in_department(1);`,
  explanation: `A table-valued function returns a table that can be queried like a regular table.\nThis example creates a function to get all students in a department and shows how to use it.`,
  // This is a static example; in a real app, you would execute DDL/DML.
  result: async () => [
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 3, name: 'Alice Johnson', grade: 'A' }
  ],
  columns: ['id', 'name', 'grade']
}; 