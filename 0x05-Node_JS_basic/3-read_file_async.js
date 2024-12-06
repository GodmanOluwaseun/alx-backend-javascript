/**
 * Program that reads database file Asynchronously.
 * @param {string} path - Path to dbase.
 * @return {promise} Promise that resolves when OfflineAudioCompletionEvent.
 */

const fs = require('fs').promises;

async function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

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
    let output = `Number of students: ${totalStudents}\n`;
    console.log(output.trim());

    Object.keys(fields).forEach((field) => {
      const students = fields[field];
      const fieldOutput = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      console.log(fieldOutput);
      output += `${fieldOutput}\n`;
    });

    return output.trim();
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
