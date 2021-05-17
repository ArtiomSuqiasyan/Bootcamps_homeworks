function monthsInterval(date1, date2) {
  let months = [
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
  let month1 = date1.getMonth();
  let month2 = date2.getMonth();
  let diffMonths = [];
  let start = month1;
  if (start > month2) {
    start = 0;
    for (let i = 0; i < 12; i++) {
      diffMonths.push(months[i]);
      if (i === month2) {
        i = month1 - 1;
      }
    }
    return diffMonths;
  }
  for (let i = month1; i <= month2; i++) {
    diffMonths.push(months[i]);
  }
  return diffMonths;
}

let january = new Date(2017, 7, 1);
let march = new Date(2020, 0, 1);
console.log(monthsInterval(january, march));
