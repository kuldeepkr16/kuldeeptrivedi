import { getStudents } from '../utils/dataLoader';

export const order_by_multiple_columns_query = {
  title: "ORDER BY Multiple Columns",
  description: "This query demonstrates how to sort data by multiple columns, first by grade then by age.",
  sql: "SELECT * FROM Students ORDER BY grade ASC, age DESC",
  explanation: "When ordering by multiple columns, the first column is sorted first, then within each group, the second column is sorted. Here we sort by grade ascending, and within each grade, by age descending.",
  result: async () => {
    const students = await getStudents();
    return [...students].sort((a, b) => {
      // First sort by grade ascending
      if (a.grade !== b.grade) {
        return a.grade.localeCompare(b.grade);
      }
      // Then by age descending
      return b.age - a.age;
    });
  },
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 