//    Description : this  script will read the contents of file and gives buffer data in output
//                    utf8 --> will return the file contents in terminal 

//const fs = require('fs');
//const data = fs.readFileSync('./1-file.txt','utf8');   // returns buffer and data in terminal
//console.log(data);

//   Des : ReadFilesync will read the file contents and writeFileSync can write it to synchronised file 

const fs = require('fs');

const path = require('path'); 
const filePath = path.resolve(__dirname, '1-file.txt');

// Read the contents of the file synchronously
const contents = fs.readFileSync(filePath, "utf8");

// Convert the contents to uppercase
const upperContents = contents.toUpperCase();

// Write the updated contents back to the file synchronously
fs.writeFileSync(filePath, upperContents);