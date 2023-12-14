import moment from 'moment';

export const isDateValid = (dateStr: string) => {
  try {
    const m = moment(dateStr);
    return m.isValid();
  } catch (err) {
    return false;
  }
};

export const getLocaleStringDate = (dateStr: string) => {
  try {
    const m = moment(dateStr);
    return m.toLocaleString();
  } catch (err) {
    throw err;
  }
};
