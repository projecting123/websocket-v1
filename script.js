const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log('Connected with the server');
    socket.send('Hi Server')
})

socket.addEventListener('message', (e) => {
    console.log("Message from the server: " + e.data);
})