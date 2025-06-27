import Message from '../models/message.model.js';


const users = new Map(); // userId => socketId

const initSocket = (io) => {

    io.on('connection', (socket) => {
        console.log('✅ New socket connected:', socket.id);

        // تسجيل المستخدم
        socket.on('user_connected', (userId) => {
            users.set(userId, socket.id);
            console.log(`👤 User ${userId} connected with socket ${socket.id}`);
        });

        // إرسال رسالة
        socket.on('send_message', async ({ senderId, receiverId, content, roomId, type = 'text' }) => {
            try {
                // 1. حفظ الرسالة في قاعدة البيانات
                const savedMessage = await Message.create({
                    sender: senderId,
                    room: roomId,
                    type,
                    content
                });

                // 2. إرسالها للمستقبل لو متصل
                const receiverSocket = users.get(receiverId);
                if (receiverSocket) {
                    io.to(receiverSocket).emit('receive_message', {
                        _id: savedMessage._id,
                        senderId,
                        content,
                        type,
                        roomId,
                        timestamp: savedMessage.createdAt
                    });
                }
            } catch (err) {
                console.error('❌ Error saving message:', err.message);
                socket.emit('error_message', { message: 'Failed to send message' });
            }
        });

        // قطع الاتصال
        socket.on('disconnect', () => {
            console.log('❌ Socket disconnected:', socket.id);
            for (const [userId, sockId] of users.entries()) {
                if (sockId === socket.id) users.delete(userId);
            }
        });
    });
};

export  default initSocket;