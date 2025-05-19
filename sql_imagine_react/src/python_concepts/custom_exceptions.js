export const custom_exceptions_concept = {
  title: 'Custom Exceptions',
  description: 'Define your own exception classes.',
  code: `class MyError(Exception):\n    pass\n\ntry:\n    raise MyError('Something went wrong!')\nexcept MyError as e:\n    print(e)`,
  explanation: 'Inherit from Exception to create custom errors.',
  result: 'Something went wrong!'
}; 