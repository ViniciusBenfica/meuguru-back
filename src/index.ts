import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT);

export default app;