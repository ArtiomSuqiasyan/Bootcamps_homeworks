function filterByField(arr) {
  let results = arr.filter(
    (item) => item.isAstronaut
  );
  return results;
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
console.log(filterByField(users, "isAstronaut"));
