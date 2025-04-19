import { getStudents } from '../utils/dataLoader';

export const select_all_students_query = {
  title: "SELECT * FROM Students",
  description: "This query demonstrates the basic SELECT statement to retrieve all columns from the students table.",
  sql: "SELECT * FROM Students",
  explanation: "The SELECT * statement retrieves all columns from the specified table. In this case, we're getting all student information including id, name, age, grade, and department_id.",
  result: async () => {
    return await getStudents();
  },
  columns: ['id', 'name', 'age', 'grade', 'department_id']
}; 