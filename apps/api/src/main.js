const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/chat-o-friend';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// In-memory user storage for real-time (will reset on server restart)
// In a real app, you might use Redis or persistent DB for this.
const users = new Map();

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join', (username) => {
    if (!username) return;
    
    const user = { id: socket.id, name: username };
    users.set(socket.id, user);
    
    console.log(`${username} joined`);
    
    // Broadcast updated user list to all users
    io.emit('userList', Array.from(users.values()));
    
    // Welcome message
    socket.emit('message', {
      user: 'System',
      text: `Welcome to chat.o.friend, ${username}!`,
      time: new Date()
    });
  });

  socket.on('sendMessage', (messageText) => {
    const user = users.get(socket.id);
    if (user && messageText) {
      const message = {
        user: user.name,
        text: messageText,
        time: new Date()
      };
      io.emit('message', message);
    }
  });

  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      console.log(`${user.name} disconnected`);
      users.delete(socket.id);
      io.emit('userList', Array.from(users.values()));
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
