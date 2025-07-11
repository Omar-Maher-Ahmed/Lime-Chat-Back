import { connectDB } from "../db/database.js";
import authRoutes from "../routes/auth.routes.js";
import userRoutes from "../routes/user.routes.js";
import roomRoutes from "../routes/room.routes.js";
import messageRoutes from "../routes/message.routes.js";
import callRoutes from "../routes/call.routes.js";


const bootstrap = (app) => {

    connectDB()

    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/room', roomRoutes);
    app.use('/api/message', messageRoutes);
    app.use('/api/call', callRoutes);

}

export default bootstrap