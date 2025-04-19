import { getStudents } from '../utils/dataLoader';

export const order_by_age_query = {
  title: "ORDER BY Age",
  description: "This query demonstrates how to sort students by their age in ascending order.",
  sql: "SELECT * FROM Students ORDER BY age",
  explanation: "The ORDER BY clause sorts the results based on the specified column. By default, sorting is in ascending order (youngest to oldest).",
  result: async () => {
    const students = await getStudents();
    return [...students].sort((a, b) => a.age - b.age);
  },
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 