import { getMarks } from '../utils/dataLoader';

export const group_by_subject_query = {
  title: "GROUP BY Subject with Average",
  description: "This query shows how to group marks by subject and calculate the average score for each subject.",
  sql: "SELECT subject, AVG(marks) as AVG_MARKS\nFROM Marks\nGROUP BY subject",
  explanation: "Using GROUP BY with aggregate functions like AVG() lets us calculate summary statistics for each group. Here we find the average score for each subject.",
  result: async () => {
    const marks = await getMarks();
    const groupedBySubject = marks.reduce((acc, mark) => {
      if (!acc[mark.subject]) {
        acc[mark.subject] = { sum: 0, count: 0 };
      }
      // Parse marks as number
      const markValue = parseFloat(mark.marks);
      acc[mark.subject].sum += markValue;
      acc[mark.subject].count += 1;
      return acc;
    }, {});
    
    return Object.entries(groupedBySubject).map(([subject, { sum, count }]) => ({
      SUBJECT: subject,
      AVG_MARKS: Math.round((sum / count) * 100) / 100
    }));
  },
  columns: ['SUBJECT', 'AVG_MARKS']
}; 