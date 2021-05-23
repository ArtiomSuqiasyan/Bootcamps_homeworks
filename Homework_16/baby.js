function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  this.play = function () {
    return `Hi,my name is ${this.name} ,I'm a ${age} years old and I love to play ${this.favoriteToy} `;
  };
}

let fn1 = new Baby("Artiom", 24, "chess");
console.log(fn1.play());