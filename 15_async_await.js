// Node.js FS Module with Async/Await: File CRUD Operations
const fs = require('fs').promises;
const path = require('path');

const fileDir = __dirname;
const filePath = path.join(fileDir, 'file.txt');

const createFile = async () => {
    try {
        await fs.writeFile(filePath, 'Hello, World!');
        console.log('File written successfully');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
};
// Read data
const readData = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
};

const appendData = async () => {
    try {
        await fs.appendFile(filePath, '\nAppended text.');
        console.log('File appended successfully');
    } catch (err) {
        console.error('Error appending to file:', err);
    }
};

const deleteFile = async () => {
    try {
        await fs.unlink(filePath);
        console.log('File deleted successfully');
    } catch (err) {
        console.error('Error deleting file:', err);
    }
};