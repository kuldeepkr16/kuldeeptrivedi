export const regex_concept = {
  title: 'Regular Expressions (re module)',
  description: 'Use the re module for pattern matching in strings.',
  code: `import re\npattern = r'\\d+'\ntext = 'There are 24 apples'\nmatch = re.search(pattern, text)\nprint(match.group())`,
  explanation: 're.search() finds the first match of the pattern in the string.',
  result: '24'
}; 