const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'file2async.txt');

// Read the contents of the file asynchronously
fs.readFile(filePath, "utf8", (err, contents) => {
    if (err) {
        return console.log(err);
    }

    // Convert the contents to uppercase
    const upperContents = contents.toUpperCase();

    // Write the updated contents back to the file asynchronously
    fs.writeFile(filePath, upperContents, (err) => {
        if (err) throw err;
        console.log("File updated.");
    });
});
