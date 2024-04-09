const WebSocket = require('ws')

// Connection establishment for WebSocket in port 8080
const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', ws => {
    console.log('Connected with the client');

    ws.on('message', message => {
        console.log("Message from the client: " + message);
        ws.send('Hi Client!');
    })
})