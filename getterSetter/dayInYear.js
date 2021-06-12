function dayOfYear(date) {
  let now = new Date(date);
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  return day;
}

console.log(dayOfYear("02/28/1997"));
