export const stored_procedure_example_query = {
  title: "Stored Procedure Example",
  description: "Demonstrates how to create and call a stored procedure in SQL.",
  sql: `CREATE PROCEDURE update_grade(IN student_id INT, IN new_grade TEXT)
LANGUAGE SQL
AS $$
  UPDATE students SET grade = new_grade WHERE id = student_id;
$$;

CALL update_grade(2, 'A');`,
  explanation: `A stored procedure is a set of SQL statements that can be executed as a program.\nThis example creates a procedure to update a student's grade and shows how to call it.`,
  // This is a static example; in a real app, you would execute DDL/DML.
  result: async () => [
    { id: 2, name: 'Jane Smith', grade: 'A' }
  ],
  columns: ['id', 'name', 'grade']
}; 