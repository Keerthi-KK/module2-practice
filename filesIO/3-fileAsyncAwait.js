const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '3-fileAsyncawait.txt');

(async () => {
    try {
        const contents = await fs.readFile(filePath, { "encoding": "utf8" });
        console.log("File Contents:", contents);
    } catch (error) {
        console.error(error);
    }
})();
