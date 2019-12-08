import { format } from 'date-fns';

const normalize = date => {
  const [year, month, day] = date.split('-');
  return new Date(`${month}-${day}-${year}`);
};

export const toUnixEpoch = date => normalize(date).getTime();

export const formatDate = (date, appearence = 'dd/MM/yyyy') =>
  format(normalize(date), appearence);
