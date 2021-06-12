function mapUserNameLength(arr) {
    let result = arr.map(item => item.username.length)
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

console.log(mapUserNameLength(users));
