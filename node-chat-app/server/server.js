const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

var app = express()
var server = http.createServer(app)
var io = socketIO(server)
app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey. What is going on.',
    createdAt: 123
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
  socket.on('newMessage', function(message) {
    console.log('newMessage', message)
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})
