function formatDate(date) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString("en-US", options);
}

let date = new Date(2014, 11, 31, 12, 30, 0);

console.log(formatDate(date));
