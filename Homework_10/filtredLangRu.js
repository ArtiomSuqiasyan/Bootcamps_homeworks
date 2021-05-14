function filterUsers(arr) {
  arr.filter(function (item) {
    if (item.lang === "ru") {
      arr.splice(arr.indexOf(item), 1);
    }
  });
  return arr;
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
console.log(filterUsers(users));
