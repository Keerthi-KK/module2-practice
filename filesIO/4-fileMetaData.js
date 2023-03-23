// Desc: this program Inspects the file Meta data

// import the fs() module for I/O file handling
const fs = require('fs');
// Reads the filename  as command-line argument 
const file = process.argv[2];

function printMetadata(file) {
    try {
        const fileStats = fs.statSync(file);
        console.log(fileStats);
    } catch (error) {
        console.log("error inspecting the file: ", error.message);
    }
}
// calls the function 
printMetadata(file)

// note : specify the file name in terminal eg: $ node 4-fileMetaData.js ./4-fileMetaData.txt