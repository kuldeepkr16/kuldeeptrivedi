import { getStudents } from '../utils/dataLoader';

export const select_specific_columns_query = {
  title: "SELECT Specific Columns",
  description: "This query shows how to select specific columns instead of using SELECT *.",
  sql: "SELECT name, age, grade FROM Students",
  explanation: "Instead of selecting all columns with *, we can specify exactly which columns we want to retrieve. This is more efficient and clearer in intent.",
  result: async () => {
    const students = await getStudents();
    return students.map(student => ({
      name: student.name,
      age: student.age,
      grade: student.grade
    }));
  },
  columns: ['name', 'age', 'grade']
}; 