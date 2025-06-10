// 
const path = require('path');
const fs = require('fs').promises;
const { log } = require('console');
const fileDir = __dirname;

const filePath = path.join(fileDir, 'file.txt');

// Write file
// fs.writeFile(filePath, 'Hello, World!')
//     .then(() => {
//         log('File written successfully');
//     })
//     .catch((err) => {
//         log('Error writing to file:', err);
//     })

// Read file
fs.readFile(filePath, 'utf8')
    .then((data) => {
        log('File content:', data);
    })
    .catch((err) => {
        log('Error reading file:', err);
    });

    // Append file 
    fs.appendFile(filePath, '\nAppended text.')
    .then(() => {
        log('File appended successfully');
    })
    .catch((err) => {
        log('Error appending to file:', err);
    });
    // Delete file

    fs.unlink(filePath)
    .then(() => {
        log('File deleted successfully');
    })
    .catch((err) => {
        log('Error deleting file:', err);
    });