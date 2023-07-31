export const convertDateToUnixTimestamp = (date) => Math.floor(date.getTime() / 1000);

export const convertUnixTimestampToDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' });
};

export const createDate = (date, weeks, months, years) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

export const dateFilter = {
  '1W': {
    weeks: 1,
    months: 0,
    years: 0,
    res: 'D',
  },
  '1M': {
    weeks: 1,
    months: 1,
    years: 0,
    res: 'D',
  },
  '3M': {
    weeks: 1,
    months: 3,
    years: 0,
    res: 'D',
  },
  '6M': {
    weeks: 1,
    months: 6,
    years: 0,
    res: 'W',
  },
  '1Y': {
    weeks: 0,
    months: 1,
    years: 1,
    res: 'W',
  },
};
