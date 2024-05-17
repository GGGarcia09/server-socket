const http = require('http');

const server = http.createServer();

const io = require('socket.io')(server, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('Se ha conectado un cliente');
    socket.on('chat_message', (data) => {
        io.emit('chat_message', data);
        
    });
    socket.on('subscribe', function (room) {
        socket.join(room);
    });
    socket.on('send message', function (data) {
        socket.broadcast.to(data.room).emit('conversation private post', { message: data.message });

    });
});

server.listen(3000);


// instalar - npm isntall -g nodemon
/// npm start
