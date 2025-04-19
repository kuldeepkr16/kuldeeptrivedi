import { getStudents, getMarks } from '../utils/dataLoader';

export const window_rank_over_query = {
  title: "RANK() Window Function",
  description: "Shows how to rank students within each subject based on their marks using the RANK() function.",
  sql: `SELECT 
    subject,
    name,
    marks,
    RANK() OVER (PARTITION BY subject ORDER BY marks DESC) as rank
FROM Marks m
JOIN Students s ON s.id = m.student_id`,
  explanation: "The RANK() window function assigns ranks within each subject partition. If two students have the same marks, they get the same rank, and the next rank is skipped.",
  result: async () => {
    const students = await getStudents();
    const marks = await getMarks();
    
    // Group marks by subject
    const subjectGroups = marks.reduce((acc, mark) => {
      if (!acc[mark.subject]) {
        acc[mark.subject] = [];
      }
      const student = students.find(s => s.id === mark.student_id);
      acc[mark.subject].push({
        name: student.name,
        marks: mark.marks
      });
      return acc;
    }, {});
    
    // Calculate ranks for each subject
    const results = [];
    Object.entries(subjectGroups).forEach(([subject, scores]) => {
      // Sort by marks descending
      scores.sort((a, b) => b.marks - a.marks);
      
      let currentRank = 1;
      let currentMarks = scores[0].marks;
      let skipCount = 0;
      
      scores.forEach((score, index) => {
        if (score.marks < currentMarks) {
          currentRank += skipCount + 1;
          skipCount = 0;
          currentMarks = score.marks;
        } else {
          skipCount++;
        }
        
        results.push({
          subject,
          name: score.name,
          marks: score.marks,
          rank: currentRank
        });
      });
    });
    
    return results.sort((a, b) => 
      a.subject.localeCompare(b.subject) || b.marks - a.marks
    );
  },
  columns: ['subject', 'name', 'marks', 'rank']
}; 