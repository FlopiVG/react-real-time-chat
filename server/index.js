const express = require('express');  
const app = express();
const path = require('path');
const socketServer = require('./socket-server');

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const webServer = app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
});

socketServer(webServer);
