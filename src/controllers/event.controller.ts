import { Response, Request, NextFunction } from 'express';
import EventRepository from '../repository/event.repository';
import { isDateValid } from '../services/utils';

export const getEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const repo = new EventRepository();
    const data = await repo.find();
    return res.status(200).json({
      data: data,
      success: true,
      message: 'fetched events successfully',
      error: null,
    });
  } catch (err) {
    return res.json({
      message: 'Some error occured',
      error: err,
      success: false,
      data: null,
    });
  }
};

export const createEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      startDateTime,
      endDateTime,
      address,
      guests,
      notification,
      reminder,
    } = req.body;
    const splittedGuests = guests.split(',');
    if (!isDateValid(startDateTime) || !isDateValid(endDateTime))
      throw new Error('date is invalid');

    const repo = new EventRepository();
    const attachments: string[] = [];
    const data = await repo.create({
      name,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      address,
      guests: splittedGuests,
      notification,
      reminder,
      attachments,
    });
    return res.status(200).json({
      data: data,
      message: 'event created successfully',
      success: true,
      error: null,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: 'Some error occured',
      error: err,
      success: false,
      data: null,
    });
  }
};
