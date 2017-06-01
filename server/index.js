const feathers = require('feathers');
const socketio = require('feathers-socketio');
const path = require('path');
const app = feathers();

const socketServer = require('./socket-server');

const PORT = process.env.PORT || 3000;

app.use(feathers.static('dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.configure(socketio(socketServer));

app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
})