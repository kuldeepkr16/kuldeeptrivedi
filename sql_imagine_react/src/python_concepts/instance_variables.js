export const instance_variables_concept = {
  title: 'Instance Variables',
  description: 'Instance variables are unique to each object.',
  code: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog('Buddy')\nprint(d.name)`,
  explanation: 'self.name is an instance variable, unique to each object.',
  result: 'Buddy'
}; 