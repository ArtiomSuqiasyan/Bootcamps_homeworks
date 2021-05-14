// function getAverageAge (arr){
//     let result = arr.reduce((sum, el) => sum + el.age / arr.length, 0,)
//     return result
// }

// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//     age: 50,
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//     age: 54,
//   },
// ];
// console.log(getAverageAge(users));

function usersAverageAge(users) {
  let averageAge = users.reduce((total, age) => {
    return total + age.age / users.length;
  }, 0);
  return averageAge;
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

console.log(usersAverageAge(users));
