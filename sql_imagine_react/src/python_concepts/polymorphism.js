export const polymorphism_concept = {
  title: 'Polymorphism',
  description: 'Different classes can have methods with the same name.',
  code: `class Bird:\n    def speak(self):\n        print('Chirp!')\nclass Duck:\n    def speak(self):\n        print('Quack!')\n\nfor animal in [Bird(), Duck()]:\n    animal.speak()`,
  explanation: 'Polymorphism allows different classes to be used interchangeably if they have the same method names.',
  result: 'Chirp!\nQuack!'
}; 