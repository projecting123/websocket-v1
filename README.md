
# __Websocket Connection Establishment:__

## __What is Websocket?__
HTTP and WebSocket both are communication protocols used in client-server communication.

## __Difference between the two?__
1. __HTTP Protocol__: HTTP is unidirectional where the client sends the request and the server sends the response. Let’s take an example when a user sends a request to the server this request goes in the form of HTTP or HTTPS, after receiving a request server send the response to the client, each request is associated with a corresponding response, after sending the response the connection gets closed, each HTTP or HTTPS request establish the new connection to the server every time and after getting the response the connection gets terminated by itself. 
HTTP is a stateless protocol that runs on top of TCP which is a connection-oriented protocol it guarantees the delivery of data packet transfer using the three-way handshaking methods and re-transmits the lost packets.   

2. __Websocket Protocol__: WebSocket is bidirectional, a full-duplex protocol that is used in the same scenario of client-server communication, unlike HTTP it starts from ws:// or wss://. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection by either of the client and server, the connection is terminated from both ends. 
With this protocol, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
## __Project Description:__

This is a project where I've established connection between the client and the server. Check the v2 project of websocket
by clicking [here](https://github.com/projecting123/websocket-v2)

## __Code Example:__
In server:
```js
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
wss.on('connection', ws => {
    console.log('Connected with the client');

    ws.on('message', message => {
        console.log("Message from the client: " + message);
        ws.send('Hi Client!');
    })
})
```

In Client:
```js
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log('Connected with the server');
    socket.send('Hi Server')
})

socket.addEventListener('message', (e) => {
    console.log("Message from the server: " + e.data);
})
```

So, we can see that "Websocket" is depends on completely on events.

## Required Package:
Here, one third party package is used i.e. 'ws'  
For installation please copy the following command-

```js
npm i ws
```

## Note
Test this by cloning the project in your development server.