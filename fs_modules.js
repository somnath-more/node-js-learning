const fs= require('fs');
const path = require('path');
const { log } = require('console');
const fileDir =__dirname
const filePath = path.join(fileDir, 'file.txt');
fs.writeFile(filePath, 'Hello, World!', (err) => {
    if (err) {
        log('Error writing to file:', err);
    } else {
        log('File written successfully');
    }
    })
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            log('Error reading file:', err);
        } else {
            log('File content:', data);
        }
    });
    fs.appendFile(filePath, '\nAppended text.', (err) => {
        if (err) {
            log('Error appending to file:', err);
        } else {
            log('File appended successfully');
        }
    });
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            log('Error reading file:', err);
        } else {
            log('File content after append:', data);
        }
    });
    // fs.writeFileSync and fs.readFileSync
    try {
        fs.writeFileSync(filePath, 'Hello, World!', 'utf8');
        log('File written successfully using sync method');
    } catch (err) {
        log('Error writing file using sync method:', err);
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        log('File content using sync method:', data);
    } catch (err) {
        log('Error reading file using sync method:', err);
    }

    const deleteFile = fs.unlinkSync(filePath);
    if (deleteFile) {
        log('File deleted successfully');
    } else {
        log('Error deleting file');
    }
    // renaming file
    const newFilePath = path.join(fileDir, 'newFile.txt');
    fs.writeFileSync(newFilePath, 'Hello, World!', 'utf8');
  fs.renameSync(newFilePath, "my.txt", (err) => {
    if (err) {
        log('Error renaming file:', err);
    } else {
        log('File renamed successfully');
    }
  })