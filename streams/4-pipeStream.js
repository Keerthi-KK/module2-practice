const fs = require("fs");

const rs = fs.createReadStream("./1-writeStreamfile.txt");
const ws = fs.createWriteStream("./4-pipeStreamOut.txt");

rs.pipe(ws);
// prints the read file to stdout 
//rs.pipe(process.stdout);
