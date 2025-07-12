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

const server = http.createServer(app);
const io = new Server(server);


bootstrap(app);

initSocket(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// app.listen(5001, () => console.log('Server running on port 5001'));
