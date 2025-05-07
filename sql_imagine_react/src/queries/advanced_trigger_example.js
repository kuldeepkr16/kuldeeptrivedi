export const advanced_trigger_example_query = {
  title: "Advanced Trigger Example",
  description: "Demonstrates an advanced trigger (BEFORE DELETE) in SQL.",
  sql: `CREATE TRIGGER before_student_delete
BEFORE DELETE ON students
FOR EACH ROW
EXECUTE PROCEDURE archive_student();`,
  explanation: `Advanced triggers can be set to fire BEFORE or AFTER INSERT, UPDATE, or DELETE.\nThis example archives a student record before it is deleted from the students table.`,
  result: async () => [
    { id: 4, name: 'Bob Wilson', action: 'ARCHIVED BEFORE DELETE' }
  ],
  columns: ['id', 'name', 'action']
}; 