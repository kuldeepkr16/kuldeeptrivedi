export const update_example_query = {
  title: "UPDATE Example",
  description: "Demonstrates how to update an existing row in the students table.",
  sql: `UPDATE students SET grade = 'A' WHERE id = 2;`,
  explanation: `The UPDATE statement modifies existing rows in a table.\nThis example updates the grade of the student with id 2 to 'A'.\nThe WHERE clause ensures only the intended row is updated.`,
  // This is a static example; in a real app, you would mutate data.
  result: async () => [
    { id: 2, name: 'Jane Smith', age: 21, grade: 'A', department_id: 2 }
  ],
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 