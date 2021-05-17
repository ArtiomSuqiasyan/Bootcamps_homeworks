function getDay(date) {
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return days[date.getDay()];
}

let date = new Date(1997, 0, 14);
console.log(getDay(date));
