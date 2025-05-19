export const generators_concept = {
  title: 'Generators',
  description: 'Generators yield values one at a time using yield.',
  code: `def count_up_to(n):\n    count = 1\n    while count <= n:\n        yield count\n        count += 1\n\nfor num in count_up_to(3):\n    print(num)`,
  explanation: 'Generators use yield to produce a sequence of values lazily.',
  result: '1\n2\n3'
}; 