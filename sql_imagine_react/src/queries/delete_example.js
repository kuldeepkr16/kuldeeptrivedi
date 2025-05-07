export const delete_example_query = {
  title: "DELETE Example",
  description: "Demonstrates how to delete a row from the students table.",
  sql: `DELETE FROM students WHERE id = 4;`,
  explanation: `The DELETE statement removes rows from a table.\nThis example deletes the student with id 4 from the students table.\nThe WHERE clause ensures only the intended row is deleted.`,
  // This is a static example; in a real app, you would mutate data.
  result: async () => [
    { id: 4, name: 'Bob Wilson', age: 22, grade: 'C', department_id: 3 }
  ],
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 