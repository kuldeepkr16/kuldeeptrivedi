import { getMarks } from '../utils/dataLoader';

export const select_all_marks_query = {
  title: "SELECT * FROM Marks",
  description: "This query shows how to retrieve all columns from the marks table.",
  sql: "SELECT * FROM Marks",
  explanation: "Similar to the previous query, this SELECT * statement retrieves all columns from the marks table, showing each student's marks in different subjects.",
  result: async () => {
    return await getMarks();
  },
  columns: ['id', 'student_id', 'subject', 'marks']
}; 