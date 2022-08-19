const calculateEndsAt = (startsAt: Date, dayNumber: number): string => {
  startsAt.setDate(startsAt.getDate() + dayNumber);
  return formatDate(startsAt);
};

const padTo2Digits = (num: number): string => {
  return num.toString().padStart(2, "0");
};

const formatDate = (date: Date): string => {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
};

export { calculateEndsAt, formatDate, padTo2Digits };
