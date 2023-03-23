//import net module 
const net = require('net');
// setup host name and port for communication
const HOSTNAME = "localhost";
const PORT = 3000;

net.createServer((socket) => {
        console.log("Client connected.");

        socket.on("data", (name) => {
            socket.write(`Hello ${name}!`);
        });
    })
    .listen(PORT, HOSTNAME);

    // split terminals and run server.js in one terminal