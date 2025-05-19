export const static_methods_concept = {
  title: 'Static Methods',
  description: 'Static methods do not access instance or class data.',
  code: `class Math:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(Math.add(2, 3))`,
  explanation: '@staticmethod defines a method that does not use self or cls.',
  result: '5'
}; 