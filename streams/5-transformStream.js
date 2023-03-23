/*

const fs = require("fs");
const { Transform } = require("stream");

const rs = fs.createReadStream("./1-writeStreamfile.txt");
const newFile = fs.createWriteStream("./5-transfrmStream.txt");

const uppercase = new Transform({
    transform(chunk, encoding, callback) {
        // calling the transform stream callback function with the transformed chunk
        callback(null, chunk.toString().toUpperCase());
    },
});

rs.pipe(uppercase).pipe(newFile);

Transform streams can be written using ES6 class syntax
*/

const fs = require("fs");
const { Transform } = require("stream");

const rs = fs.createReadStream("./1-writeStreamfile.txt");
const newFile = fs.createWriteStream("./5-transfrmStream.txt");

class UppercaseTransform extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        this.push(upperChunk);
        callback();
    }
}

const uppercaseTransform = new UppercaseTransform();

rs.pipe(uppercaseTransform).pipe(newFile);

