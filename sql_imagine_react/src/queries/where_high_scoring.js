import { getStudents, getMarks } from '../utils/dataLoader';

export const where_high_scoring_query = {
  title: "Find High Scoring Students",
  description: "This query shows how to use the WHERE clause with numerical comparisons to find students who scored above 90 marks.",
  sql: "SELECT DISTINCT s.name, s.grade, m.subject, m.marks\nFROM Students s\nJOIN Marks m ON s.id = m.student_id\nWHERE m.marks > 90",
  explanation: "We're joining the Students and Marks tables to find students who scored above 90 in any subject. The DISTINCT keyword ensures we don't get duplicate student entries.",
  result: async () => {
    const students = await getStudents();
    const marks = await getMarks();
    const highScorers = [];
    
    marks.forEach(mark => {
      if (mark.marks > 90) {
        const student = students.find(s => s.id === mark.student_id);
        if (student) {
          highScorers.push({
            name: student.name,
            grade: student.grade,
            subject: mark.subject,
            marks: mark.marks
          });
        }
      }
    });
    
    return highScorers;
  },
  columns: ['name', 'grade', 'subject', 'marks']
}; 