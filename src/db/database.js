import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log('Connecting to MongoDB...', process.env.MONGODB_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
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


    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);
    }
};
