import { getMarks } from '../utils/dataLoader';

export const order_by_marks_desc_query = {
  title: "ORDER BY Marks DESC",
  description: "This query shows how to sort marks in descending order (highest to lowest).",
  sql: "SELECT * FROM Marks ORDER BY marks DESC",
  explanation: "The DESC keyword after ORDER BY sorts the results in descending order. This shows the highest marks first.",
  result: async () => {
    const marks = await getMarks();
    return [...marks].sort((a, b) => b.marks - a.marks);
  },
  columns: ['id', 'student_id', 'subject', 'marks']
}; 