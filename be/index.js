import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/sendEmailRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5000;

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on('error', (err) => {
    console.log(`Error starting server: ${err.message}`);
  });
