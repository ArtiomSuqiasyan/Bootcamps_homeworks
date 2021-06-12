const weekOfMonth = (date) => {
  let idx = date.getDay();
  let day = date.getDate() - idx + 6;
  return Math.ceil(day / 7);
};

console.log(weekOfMonth(new Date(2021, 7, 8)));
