import { getStudents } from '../utils/dataLoader';

export const where_or_condition_query = {
  title: "Using OR Operator",
  description: "This query shows how to use the OR operator in WHERE clause to match multiple conditions.",
  sql: "SELECT * FROM Students\nWHERE grade = 'A' OR grade = 'B'",
  explanation: "The OR operator allows us to select rows that match any of the specified conditions. Here, we're selecting students who have either grade 'A' or 'B'.",
  result: async () => {
    const students = await getStudents();
    return students.filter(student => 
      student.grade === 'A' || student.grade === 'B'
    );
  },
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 