// Extra function code to help with file manipulation
const fs = require('fs');
const util = require('util');
// To read and process data from the database
const readFromFile = util.promisify(fs.readFile);
// To override and create a new database (Used for deletion)
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
// To append and add to the database
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

module.exports = { readFromFile, writeToFile, readAndAppend };
