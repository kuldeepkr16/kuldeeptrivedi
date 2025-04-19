import { getStudents, getMarks } from '../utils/dataLoader';

export const case_marks_grade_query = {
  title: "CASE Statement for Grade Categories",
  description: "Uses CASE statements to categorize marks into letter grades and shows student performance by subject.",
  sql: `
    SELECT 
      Students.name as NAME,
      Marks.subject as SUBJECT,
      Marks.marks as MARKS,
      CASE 
        WHEN marks >= 90 THEN 'A+'
        WHEN marks >= 80 THEN 'A'
        WHEN marks >= 70 THEN 'B'
        WHEN marks >= 60 THEN 'C'
        WHEN marks >= 50 THEN 'D'
        ELSE 'F'
      END as LETTER_GRADE
    FROM Students
    INNER JOIN Marks ON Students.id = Marks.student_id
    ORDER BY Students.name, Marks.subject;
  `,
  explanation: `
    This query demonstrates the use of CASE statements in SQL to perform conditional logic.
    The CASE statement evaluates each mark and assigns a letter grade based on predefined ranges.
    We join the Students and Marks tables to show each student's performance by subject.
    The results are ordered by student name and subject for easy reading.
    This is a common pattern in educational systems for converting numerical scores to letter grades.
  `,
  result: async () => {
    try {
      const students = await getStudents();
      const marks = await getMarks();
      
      // Join students and marks, then add letter grades
      return marks.map(mark => {
        const student = students.find(s => s.id.toString() === mark.student_id.toString());
        const numericMark = parseFloat(mark.marks);
        
        let letterGrade;
        if (numericMark >= 90) letterGrade = 'A+';
        else if (numericMark >= 80) letterGrade = 'A';
        else if (numericMark >= 70) letterGrade = 'B';
        else if (numericMark >= 60) letterGrade = 'C';
        else if (numericMark >= 50) letterGrade = 'D';
        else letterGrade = 'F';
        
        return {
          NAME: student ? student.name : 'Unknown',
          SUBJECT: mark.subject,
          MARKS: numericMark,
          LETTER_GRADE: letterGrade
        };
      })
      .sort((a, b) => 
        a.NAME.localeCompare(b.NAME) || 
        a.SUBJECT.localeCompare(b.SUBJECT)
      );
    } catch (error) {
      console.error('Error in case_marks_grade_query:', error);
      return [];
    }
  },
  columns: ['NAME', 'SUBJECT', 'MARKS', 'LETTER_GRADE']
}; 