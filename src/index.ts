import express, { Express, Request, Response, json } from 'express';
import cors from 'cors';
import Database from './core/db/index';
import { config } from 'dotenv';

// routes
import { eventRouter } from './routes/events';

config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.json({ info: { name: 'Event REST APIS v1.0', version: '1.0' } });
});

app.use('/event', eventRouter);

app.listen(port, () => {
  const database = Database.getInstance();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
