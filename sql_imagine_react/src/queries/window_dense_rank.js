import { getStudents, getMarks } from '../utils/dataLoader';

export const window_dense_rank_query = {
  title: "DENSE_RANK Window Function",
  description: "This query demonstrates the DENSE_RANK window function to rank students by their marks without gaps in ranking.",
  sql: `SELECT 
  s.name,
  m.subject,
  m.marks,
  DENSE_RANK() OVER (ORDER BY m.marks DESC) as dense_rank
FROM Students s
JOIN Marks m ON s.id = m.student_id
ORDER BY m.marks DESC`,
  explanation: "The DENSE_RANK window function assigns ranks to rows based on the marks in descending order. Unlike regular RANK, DENSE_RANK doesn't skip ranks for ties. For example, if two students tie for 1st place, the next student gets rank 2.",
  result: async () => {
    const students = await getStudents();
    const marks = await getMarks();
    
    // Combine and sort the data
    const combinedData = marks.map(mark => {
      const student = students.find(s => s.id === mark.student_id);
      return {
        name: student.name,
        subject: mark.subject,
        marks: mark.marks
      };
    }).sort((a, b) => b.marks - a.marks);
    
    // Add dense ranking
    let currentRank = 1;
    let previousMarks = null;
    
    return combinedData.map(row => {
      if (previousMarks !== null && row.marks !== previousMarks) {
        currentRank++;
      }
      previousMarks = row.marks;
      
      return {
        name: row.name,
        subject: row.subject,
        marks: row.marks,
        dense_rank: currentRank
      };
    });
  },
  columns: ['name', 'subject', 'marks', 'dense_rank']
}; 