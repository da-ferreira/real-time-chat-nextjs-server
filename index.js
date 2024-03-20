import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';

dotenv.config({ path: '.env' });

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: process.env.APP_URL,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
