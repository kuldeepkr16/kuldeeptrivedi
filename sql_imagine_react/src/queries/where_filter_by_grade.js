import { getStudents } from '../utils/dataLoader';

export const where_filter_by_grade_query = {
  title: "Filter Students by Grade",
  description: "This query demonstrates how to use the WHERE clause to filter students who have grade 'A'.",
  sql: "SELECT * FROM Students WHERE grade = 'A'",
  explanation: "The WHERE clause filters rows based on specified conditions. Here, we're selecting all students whose grade is 'A'.",
  result: async () => {
    const students = await getStudents();
    return students.filter(student => student.grade === 'A');
  },
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 