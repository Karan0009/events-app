import { Router } from 'express';
import { createEvent, getEvents } from '../controllers/event.controller';
import multer from 'multer';
import createAccountSchema from '../validators/createEventSchema';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
export const eventRouter = Router();

eventRouter.get('/get-events', getEvents);

eventRouter.post(
  '/',
  upload.array('files', 4),
  createAccountSchema,
  createEvent
);
