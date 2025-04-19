import { getStudents } from '../utils/dataLoader';

export const group_by_grade_query = {
  title: "GROUP BY Grade",
  description: "This query demonstrates how to group students by their grade and count how many students are in each grade.",
  sql: "SELECT grade, COUNT(*) as student_count\nFROM Students\nGROUP BY grade",
  explanation: "The GROUP BY clause groups rows that have the same values. Here, we're counting how many students are in each grade level.",
  result: async () => {
    const students = await getStudents();
    const groupedByGrade = students.reduce((acc, student) => {
      acc[student.grade] = (acc[student.grade] || 0) + 1;
      return acc;
    }, {});
    
    return Object.entries(groupedByGrade).map(([grade, count]) => ({
      grade,
      student_count: count
    }));
  },
  columns: ['grade', 'student_count']
}; 