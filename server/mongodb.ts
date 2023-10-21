import mongoose from 'mongoose';

export const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      'mongodb+srv://team6:wkZ8P5Rc9ltPtqVb@team6cluster.ypinp8k.mongodb.net/?retryWrites=true&w=majority',
    );

    if (connection.readyState === 1) {
      console.log('Database connected');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error('Database connection failed');
    return Promise.reject(error);
  }
};
