const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const filePath = "10-different-file-readers\\customers.csv"
//   csv({ separator: '\t' });
fs.createReadStream(filePath)
  .pipe(csv())
  .on('headers', (headers) => {
    console.log(`First header: ${headers}`)
  })
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });