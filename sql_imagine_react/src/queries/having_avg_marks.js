import { getMarks } from '../utils/dataLoader';

export const having_avg_marks_query = {
  title: "HAVING with Average Marks",
  description: "This query shows how to use HAVING to filter groups based on their average marks.",
  sql: "SELECT subject, AVG(marks) as avg_marks\nFROM Marks\nGROUP BY subject\nHAVING AVG(marks) > 90",
  explanation: "We use HAVING to filter groups after calculating averages. This query finds subjects where the average score is above 90, identifying high-performing subjects.",
  result: async () => {
    const marks = await getMarks();
    const groupedBySubject = marks.reduce((acc, mark) => {
      if (!acc[mark.subject]) {
        acc[mark.subject] = { sum: 0, count: 0 };
      }
      acc[mark.subject].sum += mark.marks;
      acc[mark.subject].count += 1;
      return acc;
    }, {});
    
    return Object.entries(groupedBySubject)
      .map(([subject, { sum, count }]) => ({
        subject,
        avg_marks: Math.round((sum / count) * 100) / 100
      }))
      .filter(result => result.avg_marks > 90);
  },
  columns: ['subject', 'avg_marks']
}; 