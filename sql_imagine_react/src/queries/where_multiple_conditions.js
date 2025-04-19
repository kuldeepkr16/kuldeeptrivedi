import { getStudents } from '../utils/dataLoader';

export const where_multiple_conditions_query = {
  title: "Multiple Conditions with AND",
  description: "This query demonstrates using multiple conditions in the WHERE clause with AND operator.",
  sql: "SELECT * FROM Students\nWHERE grade = 'A' AND age < 21",
  explanation: "The WHERE clause can combine multiple conditions using AND. This query finds all students who have grade 'A' and are under 21 years old.",
  result: async () => {
    const students = await getStudents();
    return students.filter(student => 
      student.grade === 'A' && student.age < 21
    );
  },
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 