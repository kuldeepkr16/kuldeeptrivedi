import { getStudents, getMarks } from '../utils/dataLoader';

export const where_between_query = {
  title: "Using BETWEEN Operator",
  description: "This query demonstrates using the BETWEEN operator to find values within a range.",
  sql: "SELECT s.name, s.age, m.subject, m.marks\nFROM Students s\nJOIN Marks m ON s.id = m.student_id\nWHERE m.marks BETWEEN 85 AND 95",
  explanation: "The BETWEEN operator provides an easy way to check if a value falls within a range. This query finds students who scored between 85 and 95 marks (inclusive).",
  result: async () => {
    const students = await getStudents();
    const marks = await getMarks();
    const results = [];
    
    marks.forEach(mark => {
      if (mark.marks >= 85 && mark.marks <= 95) {
        const student = students.find(s => s.id === mark.student_id);
        if (student) {
          results.push({
            name: student.name,
            age: student.age,
            subject: mark.subject,
            marks: mark.marks
          });
        }
      }
    });
    
    return results;
  },
  columns: ['name', 'age', 'subject', 'marks']
}; 