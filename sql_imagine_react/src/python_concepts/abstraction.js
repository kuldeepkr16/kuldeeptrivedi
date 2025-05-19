export const abstraction_concept = {
  title: 'Abstraction',
  description: 'Abstraction hides complex implementation details.',
  code: `from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side * self.side\n\ns = Square(4)\nprint(s.area())`,
  explanation: 'Abstract base classes (ABC) and @abstractmethod enforce method implementation in subclasses.',
  result: '16'
}; 