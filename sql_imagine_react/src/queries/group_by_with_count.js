import { getMarks } from '../utils/dataLoader';

export const group_by_with_count_query = {
  title: "GROUP BY with Multiple Aggregates",
  description: "This query demonstrates using multiple aggregate functions with GROUP BY to analyze marks by subject.",
  sql: "SELECT subject,\n  COUNT(*) as total_students,\n  MIN(marks) as lowest_mark,\n  MAX(marks) as highest_mark\nFROM Marks\nGROUP BY subject",
  explanation: "We can use multiple aggregate functions with GROUP BY to get various statistics. Here we count the number of students and find the lowest and highest marks for each subject.",
  result: async () => {
    const marks = await getMarks();
    const groupedBySubject = marks.reduce((acc, mark) => {
      if (!acc[mark.subject]) {
        acc[mark.subject] = {
          count: 0,
          min: Infinity,
          max: -Infinity
        };
      }
      acc[mark.subject].count += 1;
      acc[mark.subject].min = Math.min(acc[mark.subject].min, mark.marks);
      acc[mark.subject].max = Math.max(acc[mark.subject].max, mark.marks);
      return acc;
    }, {});
    
    return Object.entries(groupedBySubject).map(([subject, stats]) => ({
      subject,
      total_students: stats.count,
      lowest_mark: stats.min,
      highest_mark: stats.max
    }));
  },
  columns: ['subject', 'total_students', 'lowest_mark', 'highest_mark']
}; 