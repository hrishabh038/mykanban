export interface DecodedDate {
  day: string;
  date: number;
  month: {
    num: number;
    label: string;
  };
  year: number;
}

export function decodeDate(isoString: string): DecodedDate {
  const date = new Date(isoString);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {
    day: days[date.getDay()],
    date: date.getDate(),
    month: {
      num: date.getMonth() + 1, // getMonth() is 0-indexed, so +1
      label: months[date.getMonth()],
    },
    year: date.getFullYear(),
  };
}
