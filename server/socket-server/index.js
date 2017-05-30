const io = require('socket.io');

module.exports = (server) => {
    const socketServer = io(server);
    const connections = [];

    socketServer.on('connection', socket => {
        console.log(socket.id, "connected");
        connections.push(socket);

        socket.on('message', data => {
            console.log(data);
            connections.forEach(connectedSocket => {
                connectedSocket.emit('serverMessage', data);
            });
        });

        socket.on('disconnect', () => {
            console.log(socket.id, "disconnected");
            const index = connections.indexOf(socket);
            connections.splice(index, 1);
        });
    })
}