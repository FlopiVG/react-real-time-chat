module.exports = (io) => {
    const connections = [];

    io.on('connection', (socket) => {
        console.log("Conected");
        connections.push(socket);
        socket.on('message', data => {
            connections.forEach(connectedSocket => {
                connectedSocket.emit('serverMessage', data);
            });
        });

        socket.on('disconnect', () => {
            console.log('Disconected');
            const index = connections.indexOf(socket);
            connections.splice(index, 1);
        })    
    });
}