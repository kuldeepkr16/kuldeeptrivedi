import { getMarks } from '../utils/dataLoader';

export const having_min_marks_query = {
  title: "HAVING with MIN Marks",
  description: "This query demonstrates using HAVING to filter groups based on their minimum marks.",
  sql: "SELECT subject, MIN(marks) as min_marks\nFROM Marks\nGROUP BY subject\nHAVING MIN(marks) >= 85",
  explanation: "The HAVING clause filters groups after GROUP BY aggregation. Here we find subjects where even the lowest score is at least 85.",
  result: async () => {
    const marks = await getMarks();
    const groupedBySubject = marks.reduce((acc, mark) => {
      if (!acc[mark.subject]) {
        acc[mark.subject] = Infinity;
      }
      acc[mark.subject] = Math.min(acc[mark.subject], mark.marks);
      return acc;
    }, {});
    
    return Object.entries(groupedBySubject)
      .filter(([_, min_marks]) => min_marks >= 85)
      .map(([subject, min_marks]) => ({
        subject,
        min_marks
      }));
  },
  columns: ['subject', 'min_marks']
}; 