import express from 'express';
import https from 'https';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

const MONGO_URI = 'mongodb+srv://rohitsinha2022:lolface123@userdata.nr0iftg.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
