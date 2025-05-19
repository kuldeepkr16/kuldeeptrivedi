export const file_io_concept = {
  title: 'File Input and Output',
  description: 'Read from and write to files.',
  code: `with open('sample.txt', 'w') as f:\n    f.write('Hello, file!')\nwith open('sample.txt', 'r') as f:\n    content = f.read()\nprint(content)`,
  explanation: 'Use open() with "w" to write and "r" to read. with handles closing the file.',
  result: 'Hello, file!'
}; 