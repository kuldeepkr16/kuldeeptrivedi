export const function_example_query = {
  title: "Function Example",
  description: "Demonstrates how to create and use a SQL function.",
  sql: `CREATE FUNCTION get_student_age(student_id INT) RETURNS INT AS $$
  SELECT age FROM students WHERE id = student_id;
$$ LANGUAGE SQL;

SELECT get_student_age(1);`,
  explanation: `A SQL function returns a value and can be used in queries.\nThis example creates a function to get a student's age by id and shows how to call it.`,
  // This is a static example; in a real app, you would execute DDL/DML.
  result: async () => [
    { student_id: 1, age: 20 }
  ],
  columns: ['student_id', 'age']
}; 