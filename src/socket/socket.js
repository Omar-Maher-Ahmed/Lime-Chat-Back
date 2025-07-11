import Message from '../models/message.model.js';
import * as  messageRepo from '../repos/message.repo.js';
let counter = 0

const connectedUsers = new Map();


const initSocket = (io) => {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Handle user joining
        socket.on('join', (userData) => {
            connectedUsers.set(socket.id, {
                id: socket.id,
                username: userData.username || 'Anonymous',
                joinedAt: new Date()
            });

            // Notify all clients about the new user
            io.emit('userJoined', {
                userId: socket.id,
                username: userData.username || 'Anonymous',
                totalUsers: connectedUsers.size
            });

            // Send current user count to the new user
            socket.emit('userCount', connectedUsers.size);

            console.log(`${userData.username || 'Anonymous'} joined the chat`);
        });

        // Handle chat messages
        socket.on('message', (messageData) => {
            const user = connectedUsers.get(socket.id);
            if (user) {
                const fullMessage = {
                    id: Date.now(),
                    username: user.username,
                    message: messageData.message,
                    timestamp: new Date(),
                    userId: socket.id
                };

                // Broadcast message to all connected clients
                io.emit('message', fullMessage);
                console.log(`Message from ${user.username}: ${messageData.message}`);
            }
        });

        // Handle typing indicators
        socket.on('typing', (data) => {
            console.log("typing", data)
            socket.broadcast.emit('userTyping', {
                username: data.username,
                userId: socket.id,
                isTyping: data.isTyping
            });

        });

        // Handle private messages
        socket.on('privateMessage', (data) => {
            const sender = connectedUsers.get(socket.id);
            if (sender) {
                const privateMsg = {
                    id: Date.now(),
                    from: sender.username,
                    fromId: socket.id,
                    message: data.message,
                    timestamp: new Date(),
                    isPrivate: true
                };

                // Send to specific user
                socket.to(data.targetUserId).emit('privateMessage', privateMsg);

                // Send confirmation to sender
                socket.emit('privateMessageSent', privateMsg);
            }
        });

        // Handle custom events
        socket.on('customEvent', (data) => {
            console.log('Custom event received:', data);

            // Echo back to sender
            socket.emit('customEventResponse', {
                originalData: data,
                serverResponse: 'Event received successfully',
                timestamp: new Date()
            });
        });

        // Handle room joining
        socket.on('joinRoom', (roomName) => {
            socket.join(roomName);
            socket.emit('roomJoined', { room: roomName });

            // Notify others in the room
            socket.to(roomName).emit('userJoinedRoom', {
                username: connectedUsers.get(socket.id)?.username || 'Anonymous',
                room: roomName
            });

            console.log(`User ${socket.id} joined room: ${roomName}`);
        });

        // Handle room messages
        socket.on('roomMessage', async (data) => {
            console.log('room message', data, socket.id);


            const roomMessage = {
                id: Date.now(),
                message: data.content,
                room: data.room,
                sender: data.sender,
                timestamp: new Date(),
                userId: socket.id
            };

            messageRepo.sendMessage({ sender: data.sender, room: data.room, content: data.content, })

            // Send to all users in the room
            io.to(data.room).emit('roomMessage', roomMessage);

        });

        // Handle disconnection
        socket.on('disconnect', () => {
            const user = connectedUsers.get(socket.id);
            if (user) {
                console.log(`User disconnected: ${user.username} (${socket.id})`);

                // Remove user from connected users
                connectedUsers.delete(socket.id);

                // Notify all clients about user leaving
                io.emit('userLeft', {
                    userId: socket.id,
                    username: user.username,
                    totalUsers: connectedUsers.size
                });
            }
        });

        // Handle connection errors
        socket.on('error', (error) => {
            console.error('Socket error:', error);
        });
    });


};

export default initSocket;