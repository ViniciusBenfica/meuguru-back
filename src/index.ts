import express from 'express';
import router from './routes/routes';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(router);

const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT);

export default app;