import { getStudents, getMarks } from '../utils/dataLoader';

export const window_rank_comparison_query = {
  title: "Window Functions: ROW_NUMBER vs RANK vs DENSE_RANK",
  description: "This query demonstrates the key differences between ROW_NUMBER(), RANK(), and DENSE_RANK() window functions using student marks data.",
  sql: `SELECT 
  s.name,
  m.subject,
  m.marks,
  ROW_NUMBER() OVER (ORDER BY m.marks DESC) as row_num,
  RANK() OVER (ORDER BY m.marks DESC) as rank,
  DENSE_RANK() OVER (ORDER BY m.marks DESC) as dense_rank
FROM Students s
JOIN Marks m ON s.id = m.student_id
ORDER BY m.marks DESC`,
  explanation: `This query demonstrates three different window functions that assign rankings to rows:

1. ROW_NUMBER(): Assigns a unique sequential number to each row, regardless of ties. Even if two students have the same marks, they get different row numbers.

2. RANK(): Assigns the same rank to rows with equal values, but creates gaps in the ranking sequence. For example, if two students tie for 1st place, the next student gets rank 3.

3. DENSE_RANK(): Similar to RANK() but without gaps in the ranking sequence. If two students tie for 1st place, the next student gets rank 2.

The query joins the Students and Marks tables, then applies all three ranking functions to the marks in descending order. This allows us to see how each function handles ties differently.`,
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
    
    // Add rankings
    let currentRank = 1;
    let currentDenseRank = 1;
    let previousMarks = null;
    let skipCount = 0;
    
    return combinedData.map((row, index) => {
      const rowNum = index + 1;
      
      if (previousMarks !== null && row.marks !== previousMarks) {
        currentRank += skipCount + 1;
        currentDenseRank++;
        skipCount = 0;
      } else if (index > 0) {
        skipCount++;
      }
      
      previousMarks = row.marks;
      
      return {
        name: row.name,
        subject: row.subject,
        marks: row.marks,
        row_num: rowNum,
        rank: currentRank,
        dense_rank: currentDenseRank
      };
    });
  },
  columns: ['name', 'subject', 'marks', 'row_num', 'rank', 'dense_rank']
}; 