import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        mongoose.connection.on('connected', () => {
            console.log('📡 Mongoose connected to MongoDB');
        });
        mongoose.connection.on('error', (err) => {
            console.error('❌ Mongoose connection error:', err);
        });
        mongoose.connection.on('disconnected', () => {
            console.log('📡 Mongoose disconnected from MongoDB');
        });
        // process.on('SIGINT', async () => {
        //     await mongoose.connection.close();
        //     console.log('📡 Mongoose connection closed due to app termination');
        //     process.exit(0);
        // });

    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);
    }
};
