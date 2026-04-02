const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check for Vercel
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Chat API is running' });
});

const io = new Server({
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
  transports: ['websocket', 'polling'],
  // Increase compatibility for serverless
  allowEIO3: true
});

// Explicitly handle socket.io requests for Vercel
app.all('/socket.io*', (req, res) => {
  io.engine.handleRequest(req, res);
});

const server = http.createServer(app);
// Attach io to the server for local development (non-production)
if (process.env.NODE_ENV !== 'production') {
  io.attach(server);
}

// In-memory user storage for real-time (will reset on server restart)
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

// Only start the server if we're not in a serverless environment (e.g., local dev)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
