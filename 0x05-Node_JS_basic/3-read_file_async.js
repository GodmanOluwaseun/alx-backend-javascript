/**
 * Program that reads database file Asynchronously.
 * @param {string} path - Path to dbase.
 * @return {promise} Promise that resolves when OfflineAudioCompletionEvent.
 */

const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');
    const lines = content.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const fields = {};

    lines.slice(1).forEach((line) => {
      const [firstName, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    Object.keys(fields).forEach((field) => {
      const students = fields[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
