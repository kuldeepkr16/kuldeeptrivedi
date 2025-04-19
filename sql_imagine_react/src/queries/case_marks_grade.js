import { getStudents, getMarks } from '../utils/dataLoader';

export const case_marks_grade_query = {
  title: "CASE Statement for Grade Categories",
  description: "Uses CASE statements to categorize marks into letter grades and shows student performance by subject.",
  sql: `
    SELECT 
      Students.name,
      Marks.subject,
      Marks.marks,
      CASE 
        WHEN marks >= 90 THEN 'A+'
        WHEN marks >= 80 THEN 'A'
        WHEN marks >= 70 THEN 'B'
        WHEN marks >= 60 THEN 'C'
        WHEN marks >= 50 THEN 'D'
        ELSE 'F'
      END as letter_grade
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
    const students = await getStudents();
    const marks = await getMarks();
    
    // Join students and marks, then add letter grades
    return marks.map(mark => {
      const student = students.find(s => s.id === mark.student_id);
      let letterGrade;
      if (mark.marks >= 90) letterGrade = 'A+';
      else if (mark.marks >= 80) letterGrade = 'A';
      else if (mark.marks >= 70) letterGrade = 'B';
      else if (mark.marks >= 60) letterGrade = 'C';
      else if (mark.marks >= 50) letterGrade = 'D';
      else letterGrade = 'F';
      
      return {
        name: student ? student.name : 'Unknown',
        subject: mark.subject,
        marks: mark.marks,
        letter_grade: letterGrade
      };
    }).sort((a, b) => a.name.localeCompare(b.name) || a.subject.localeCompare(b.subject));
  },
  columns: ['name', 'subject', 'marks', 'letter_grade']
}; 