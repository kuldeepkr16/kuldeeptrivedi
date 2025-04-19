import { getStudents, getMarks } from '../utils/dataLoader';

export const join_inner_students_marks_query = {
  title: "INNER JOIN Students and Marks",
  description: "Shows how to combine student information with their marks using INNER JOIN.",
  sql: `SELECT s.name, s.grade, m.subject, m.marks
FROM Students s
INNER JOIN Marks m ON s.id = m.student_id`,
  explanation: "INNER JOIN returns only the matching rows between two tables. Here, we get only students who have marks recorded.",
  result: async () => {
    const students = await getStudents();
    const marks = await getMarks();
    
    return marks.map(mark => {
      const student = students.find(s => s.id === mark.student_id);
      return {
        name: student.name,
        grade: student.grade,
        subject: mark.subject,
        marks: mark.marks
      };
    });
  },
  columns: ['name', 'grade', 'subject', 'marks']
}; 