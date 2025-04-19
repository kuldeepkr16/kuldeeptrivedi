import { getStudents, getMarks } from '../utils/dataLoader';

export const subquery_in_where_query = {
  title: "Subquery in WHERE Clause",
  description: "Demonstrates using a subquery to find students who have scored above average in any subject.",
  sql: `SELECT DISTINCT s.name, s.grade
FROM Students s
WHERE s.id IN (
    SELECT student_id 
    FROM Marks 
    WHERE marks > (SELECT AVG(marks) FROM Marks)
)`,
  explanation: "This query uses nested subqueries: first to calculate the overall average marks, then to find students who scored above this average.",
  result: async () => {
    const students = await getStudents();
    const marks = await getMarks();
    
    // Calculate average marks (parse as numbers)
    const totalMarks = marks.reduce((sum, mark) => sum + parseFloat(mark.marks), 0);
    const avgMarks = totalMarks / marks.length;
    
    // Find students with marks above average
    const highScoringIds = new Set(
      marks
        .filter(mark => parseFloat(mark.marks) > avgMarks)
        .map(mark => mark.student_id.toString())  // Convert to string for consistent comparison
    );
    
    // Filter students and format output
    const results = students
      .filter(student => highScoringIds.has(student.id.toString()))  // Convert to string for comparison
      .map(student => ({
        NAME: student.name,
        GRADE: student.grade
      }));
    
    console.log('Average marks:', avgMarks);
    console.log('High scoring IDs:', [...highScoringIds]);
    console.log('Results:', results);
    
    return results;
  },
  columns: ['NAME', 'GRADE']
}; 