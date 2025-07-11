import Message from '../models/message.model.js';

const initSocket = (wss) => {
    wss.on('connection', (ws) => {
        console.log('Client connected');

        ws.on('message', (message) => {
            console.log('Received:', JSON.parse(message));

            // Broadcast to all clients
            wss.clients.forEach((client) => {
                if (client.readyState === ws.OPEN) {
                    client.send(`Echo: ${message}`);
                }
            });
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });

};

export default initSocket;