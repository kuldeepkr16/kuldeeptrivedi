export const inheritance_concept = {
  title: 'Inheritance',
  description: 'A class can inherit from another class.',
  code: `class Animal:\n    def speak(self):\n        print('Animal sound')\n\nclass Dog(Animal):\n    pass\n\nd = Dog()\nd.speak()`,
  explanation: 'Dog inherits from Animal and gets its methods.',
  result: 'Animal sound'
}; 