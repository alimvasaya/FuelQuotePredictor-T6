import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI);

    if (connection.readyState === 1) {
      console.log('Database connected');
      return Promise.resolve(true);
    } else {
      console.error('Database connection failed. Connection state:', connection.readyState);
      return Promise.reject(new Error('Database connection failed.'));
    }
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    return Promise.reject(new Error('Database connection failed.'));
  }
};
