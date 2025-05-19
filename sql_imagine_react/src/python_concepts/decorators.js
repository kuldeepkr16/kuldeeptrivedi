export const decorators_concept = {
  title: 'Decorators',
  description: 'Decorators modify the behavior of functions.',
  code: `def my_decorator(func):\n    def wrapper():\n        print('Before')\n        func()\n        print('After')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()`,
  explanation: 'Decorators wrap a function to add extra behavior before and after.',
  result: 'Before\nHello!\nAfter'
}; 