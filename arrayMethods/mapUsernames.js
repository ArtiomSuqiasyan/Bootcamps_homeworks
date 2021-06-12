function mapUserNames(arr) {
    let result = arr.map(item => item.username)
    return result
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

console.log(mapUserNames(users));
