export const encapsulation_concept = {
  title: 'Encapsulation',
  description: 'Encapsulation restricts direct access to data.',
  code: `class Car:\n    def __init__(self):\n        self.__speed = 0\n    def set_speed(self, speed):\n        self.__speed = speed\n    def get_speed(self):\n        return self.__speed\n\nc = Car()\nc.set_speed(60)\nprint(c.get_speed())`,
  explanation: 'Prefixing a variable with __ makes it private (name mangling).',
  result: '60'
}; 