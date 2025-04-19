import Papa from 'papaparse';

// Import CSV files
import studentsData from '../data/students.csv?raw';
import marksData from '../data/marks.csv?raw';

const parseCSV = (csvText) => {
  const { data } = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true
  });
  return data;
};

export const getStudents = async () => {
  return parseCSV(studentsData);
};

export const getMarks = async () => {
  return parseCSV(marksData);
}; 