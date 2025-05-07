export const insert_into_example_query = {
  title: "INSERT INTO Example",
  description: "Demonstrates how to insert a new row into the students table.",
  sql: `INSERT INTO students (id, name, age, grade, department_id)
VALUES (6, 'Chris Green', 23, 'B', 2);`,
  explanation: `The INSERT INTO statement adds a new row to the students table.\nYou specify the columns and the values to insert.\nThis example adds a new student named Chris Green.`,
  // This is a static example; in a real app, you would mutate data.
  result: async () => [
    { id: 6, name: 'Chris Green', age: 23, grade: 'B', department_id: 2 }
  ],
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 