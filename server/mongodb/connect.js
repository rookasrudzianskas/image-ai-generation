import mongoose from 'mongoose';

const connectDB = async (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url).then(() => console.log('Connected to MongoDB')).catch((err) => {
    console.error('failed to connect with mongo');
    console.error(err);
  });
}

export default connectDB;
