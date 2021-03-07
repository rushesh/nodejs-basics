const readXlsxFile = require('read-excel-file/node');
const fs = require('fs')
const filePath = "students.xlsx"

//by default sheet 1 is only picked
readXlsxFile(filePath).then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  console.log(rows)
})

// Readable Stream.
readXlsxFile(fs.createReadStream(filePath)).then((rows) => {
    console.log(rows)
})

//get all sheet names
readXlsxFile(filePath, { getSheets: true }).then((sheets) => {
    console.log(sheets)
})

//sheet name
readXlsxFile(filePath, { sheet: 'School' }).then((data) => {
    console.log(data)
})

//sheet number
readXlsxFile(filePath, { sheet: 2 }).then((data) => {
    console.log(data)
})