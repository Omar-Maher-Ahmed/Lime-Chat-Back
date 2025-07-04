import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import messageRoutes from './src/routes/message.routes.js';
import roomRoutes from './src/routes/room.routes.js';
import callRoutes from './src/routes/call.routes.js';
// import { errorHandler } from './src/middleware/error.middleware.js';
import initSocket from './src/socket/socket.js';
import { Server } from 'socket.io';
import http from 'http';
import userRoutes from './src/routes/user.routes.js';
import authRoutes from './src/routes/auth.routes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(errorHandler);

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/room', roomRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/call', callRoutes);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

    })
    .catch(err => console.log(err));

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
});

initSocket(io);

app.listen(5000, () => console.log('Server running on port 5000'));
server.listen(5001, () => console.log('Server running on port 5001'));
