# 💬 Lime Chat — Full-Stack Real-Time Chat Application

**Lime Chat** is a powerful full-stack real-time chat app that enables multiple users to register, log in, and chat privately — just like WhatsApp or Messenger. It uses modern web technologies like **Node.js**, **Socket.IO**, and **MongoDB**, and is designed to be extendable with features like media sharing, typing indicators, notifications, and more.

---

## 🚀 Features

- 🔐 **User Authentication** (Register & Login with JWT)
- 💬 **Real-Time Messaging** via Socket.IO
- 🧑‍🤝‍🧑 **One-to-One Private Chats**
- 💾 **Store Messages in MongoDB**
- 👁 **Typing & Seen Indicators**
- 📨 **Notifications for New Messages**
- 🎥 **Media Support (Images, Audio, etc.)**
- 👥 **Group Chat Rooms (coming soon)**
- 📋 **User List to select who to chat with**
- ✨ Simple & Clean UI (HTML/CSS/Vanilla JS or extend with React)

---

## 🧱 Project Structure

lime-chat/
├── server/
│ ├── controllers/ # Request handlers (auth, chat)
│ ├── models/ # MongoDB models (User, Message)
│ ├── routes/ # Express routes (auth, messages)
│ ├── config/ # MongoDB connection setup
│ ├── middleware/ # JWT verification middleware
│ └── server.js # Main server file + Socket.IO
├── client/
│ ├── login.html # Login page
│ ├── register.html # Registration page
│ ├── users.html # List of available users
│ ├── chat.html # Private chat UI
│ ├── style.css # Shared styles
│ └── script.js # Frontend socket logic
├── .env # Environment variables
├── package.json
└── README.md


---

## 🔐 Authentication Flow

1. User registers or logs in.
2. JWT token is generated and saved in `localStorage`.
3. Token is sent with protected API requests.
4. User selects another user to chat with → joins private room.
5. Messages are exchanged live using Socket.IO.

---

## 🧠 Socket.IO Events

| Event            | Description                                 |
|------------------|---------------------------------------------|
| `joinRoom`       | Join a private room between two users       |
| `chatMessage`    | Send message to the other user              |
| `receiveMessage` | Receive message in real time                |
| `typing`         | Notify when user is typing                  |
| `stopTyping`     | Notify when user stops typing               |
| `seenMessage`    | Mark message as seen                        |
| `newNotification`| Trigger popup or sound on new message       |

---

## 📦 Installation

### 1. Clone the project

```bash
git clone https://github.com/your-username/lime-chat.git
cd lime-chat
npm install
```
- Create file .env
  
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/lime-chat
JWT_SECRET=supersecretkey
```bash
npm run dev
```
| Method | Endpoint               | Description                 |
| ------ | ---------------------- | --------------------------- |
| POST   | /api/register          | Register new user           |
| POST   | /api/login             | Login existing user         |
| GET    | /api/users             | Get all users               |
| GET    | /api/messages/\:userId | Get chat messages with user |
| POST   | /api/messages          | Save message to DB          |
