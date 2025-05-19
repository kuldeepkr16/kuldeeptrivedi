export const recursion_concept = {
  title: 'Recursion',
  description: 'A function can call itself (recursion).',
  code: `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nprint(factorial(4))`,
  explanation: 'Recursion is when a function calls itself. Always have a base case to avoid infinite recursion.',
  result: '24'
}; 