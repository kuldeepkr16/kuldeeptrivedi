import Papa from 'papaparse';

export const loadCSVData = async (filename) => {
  try {
    const response = await fetch(`/src/data/${filename}`);
    const csvText = await response.text();
    const { data } = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    });
    return data;
  } catch (error) {
    return [];
  }
};

export const getStudents = async () => {
  return await loadCSVData('students.csv');
};

export const getMarks = async () => {
  return await loadCSVData('marks.csv');
}; 