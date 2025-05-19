export const class_methods_concept = {
  title: 'Class Methods',
  description: 'Class methods receive the class as the first argument.',
  code: `class Person:\n    count = 0\n    @classmethod\n    def increment(cls):\n        cls.count += 1\n\nPerson.increment()\nprint(Person.count)`,
  explanation: '@classmethod methods receive the class (cls) as the first argument.',
  result: '1'
}; 