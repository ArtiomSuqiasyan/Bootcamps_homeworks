function map(arr, fn, idx = 0) {
  let mapArr = [];
  for (let i = idx; i < arr.length; i++) {
    mapArr.push(fn(arr[i]));
  }
  return mapArr;
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

console.log(map(users, (el) => el.username));
console.log(users.map((el) => el.username))
