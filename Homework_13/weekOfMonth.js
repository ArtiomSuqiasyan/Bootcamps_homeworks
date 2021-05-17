const getWeekOfMonth = (date) => {
  let day = date.getDate();
  return day;
};
const result = getWeekOfMonth(new Date(2017, 10, 9));
const weekOfMonth = Math.ceil(result / 7);
console.log(weekOfMonth);
