const { log } = require("console");
const path = require("path");
const pathToFile = path.join(__dirname, "file.txt");
console.log(pathToFile);

console.log(__dirname);
// console.log(__filename);
console.log(__filename+path.delimiter);
const filePAth=path.join(__dirname,"file.txt");// it uses appropriate separator
log(path.basename(filePAth));
console.log(path.extname(filePAth));
console.log(path.parse(filePAth));
console.log(path.resolve("file.txt"));
log(path.sep);
console.log(path.isAbsolute(filePAth));



