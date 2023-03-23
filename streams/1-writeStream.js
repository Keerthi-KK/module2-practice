const fs = require("fs");

const file = fs.createWriteStream("./1-writeStreamfile.txt");

for (let i = 1; i <= 1000; i++) {
    file.write(
        "Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine.\n"
    );
}


// note : ls -lh 1-writeStreamfile.txt will give the space occupied by the file