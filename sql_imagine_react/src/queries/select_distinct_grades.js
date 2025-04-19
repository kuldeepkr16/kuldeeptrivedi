import { getStudents } from '../utils/dataLoader';

export const select_distinct_grades_query = {
  title: "SELECT DISTINCT Grade",
  description: "This query demonstrates how to use DISTINCT to get unique grade values from the students table.",
  sql: "SELECT DISTINCT grade FROM Students",
  explanation: "The DISTINCT keyword eliminates duplicate values, showing us each unique grade that exists in the students table.",
  result: async () => {
    const students = await getStudents();
    if (!students || students.length === 0) {
      return [];
    }
    const uniqueGrades = Array.from(new Set(students.map(student => student.grade)))
      .map(grade => ({ grade }));
    return uniqueGrades;
  },
  columns: ['grade']
}; 