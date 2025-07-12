import dotenv from 'dotenv';

dotenv.config();

import cors from 'cors';

import express from "express";
import http from 'http';
import { Server } from 'socket.io';

import bootstrap from "./bootstrap.js";
import initSocket from "../socket/socket.js";

const app = express();
app.use(cors());

app.use(express.json());

// const server = http.createServer(app);
// const wss = new WebSocketServer({ server })
// const io = new Server(server);


bootstrap(app);

// initSocket(io);

app.listen(5000, () => console.log('Server running on port 5000'));
// server.listen(5001, () => console.log('Server running on port 5001'));
