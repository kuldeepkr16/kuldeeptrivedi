export const trigger_example_query = {
  title: "Trigger Example",
  description: "Demonstrates how to create a trigger in SQL.",
  sql: `CREATE TABLE audit_log (
  id INTEGER PRIMARY KEY,
  student_id INTEGER,
  action TEXT,
  action_time TIMESTAMP
);

CREATE TRIGGER log_student_update
AFTER UPDATE ON students
FOR EACH ROW
EXECUTE PROCEDURE log_update();`,
  explanation: `A trigger automatically executes a function in response to certain events on a table.\nThis example creates an audit_log table and a trigger that logs updates to the students table.`,
  // This is a static example; in a real app, you would execute DDL.
  result: async () => [
    { id: 1, student_id: 2, action: 'UPDATE', action_time: '2024-06-01 10:00:00' }
  ],
  columns: ['id', 'student_id', 'action', 'action_time']
}; 