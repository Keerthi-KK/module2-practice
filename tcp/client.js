//import net module 
const net = require('net');

// setup host name and port for communication
const HOSTNAME = "localhost";
const PORT = 3000;

//try to connect to the server at the port 
const socket = net.connect(PORT, HOSTNAME);
socket.write("World");
// listens to the data returned by socket 
socket.on("data", (data) => {
    console.log(data.toString());
    });

// Note : run this program in second shell 