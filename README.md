# 🟢 Lime Chat – Real-Time Messaging App (Backend)

Lime Chat is a real-time chat backend built using **Node.js**, **Express**, **MongoDB**, and **Socket.IO**.  
It supports private and group messaging, audio/video content, and real-time messaging using WebSockets.  
The architecture is scalable and ready to integrate WebRTC-based calling (1:1 and group meetings).

---

## 🚀 Features

### ✅ Authentication
- User registration and login using JWT
- Password hashing with bcrypt
- Auth middleware for protected routes

### 💬 Messaging
- Create private and group chat rooms
- Send messages in real-time via Socket.IO
- Save all messages to MongoDB (text, audio, video)
- Upload audio using `Multer`
- Ready for video support

### 🔄 Real-Time Chat (Socket.IO)
- User connection mapping via Socket ID
- Real-time messaging between users
- Emits `receive_message` on delivery
- Tracks online/disconnected users


will be comming: 

### 📞 Call Logging (ready for WebRTC)
- Models and API for tracking call data
- Supports voice, video, and meeting types

---

## 🗂 Project Structure

Lime-Chat/
├── controllers/
│ ├── auth.controller.js
│ ├── room.controller.js
│ ├── message.controller.js
│ └── call.controller.js
│ └── meeting.controller.js
│
├── middleware/
│ ├── auth.middleware.js
│ ├── validateRequest.middleware.js
│ └── upload.middleware.js
│ ├── user.middleware.js
│ ├── room.middleware.js
│ ├── message.middleware.js
│
├── models/
│ ├── user.model.js
│ ├── room.model.js
│ ├── message.model.js
│ ├── call.model.js
│ └── meeting.model.js
|
├── repo/
│ ├── auth.repo.js
│ ├── room.repo.js
│ ├── message.repo.js
│ └── call.repo.js
│ └── meeting.repo.js
|
├── routes/
│ ├── auth.routes.js
│ ├── room.routes.js
│ ├── message.routes.js
│ └── call.routes.js
│
├── sockets/
│ └── socket.js
│
├── uploads/ # Audio/Video file uploads
├── server.js
└── .env


---

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/lime-chat.git
cd lime-chat
npm install
PORT=5000
MONGO_URI=mongodb://localhost:27017/limechat
JWT_SECRET=your_jwt_secret_key
npm start










