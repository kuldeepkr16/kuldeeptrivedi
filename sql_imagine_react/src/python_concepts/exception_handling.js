export const exception_handling_concept = {
  title: 'Exception Handling (try, except)',
  description: 'Handle errors gracefully using try and except.',
  code: `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')`,
  explanation: 'try runs code that might fail. except handles specific errors.',
  result: 'Cannot divide by zero!'
}; 