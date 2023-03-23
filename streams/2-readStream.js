const fs = require("fs");

const rs = fs.createReadStream("./1-writeStreamfile.txt");

// registering a "data" event handler, which will execute each time a chunk of data has been read
rs.on("data", (data) => {
    console.log("Read chunk:", data);

    //calling toString() on the individual chunks of data within the data event handler function, we will see the String content output as it is processed
    console.log("Read chunk:", data.toString());
});

// adding an "end" event handler, which will be fired when there is no more data left to be consumed from the stream
rs.on("end", () => {
    console.log("No more data.");
});

