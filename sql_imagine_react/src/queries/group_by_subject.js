import { getMarks } from '../utils/dataLoader';

export const group_by_subject_query = {
  title: "GROUP BY Subject with Average",
  description: "This query shows how to group marks by subject and calculate the average score for each subject.",
  sql: "SELECT subject, AVG(marks) as average_score\nFROM Marks\nGROUP BY subject",
  explanation: "Using GROUP BY with aggregate functions like AVG() lets us calculate summary statistics for each group. Here we find the average score for each subject.",
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
    
    return Object.entries(groupedBySubject).map(([subject, { sum, count }]) => ({
      subject,
      average_score: Math.round((sum / count) * 100) / 100
    }));
  },
  columns: ['subject', 'average_score']
}; 