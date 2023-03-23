const fs = require("fs");

const rs = fs.createReadStream("./1-writeStreamfile.txt");

rs.on("data", (data) => {
    console.log("Read chunk:", data.toString());

    // Pause the stream after reading the first chunk of data
    rs.pause();

    // Wait for 1 second before resuming the stream
    setTimeout(() => {
        console.log("Resuming stream.");
        rs.resume();
    }, 1000);
});

rs.on("end", () => {
    console.log("No more data.");
});
