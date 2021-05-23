function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.eat = function eat(food) {
      if (this.stomach.length <= 10) {
        this.stomach.push(food);
      }
    };
    this.poop = function poop(shit) {
      if (this.stomach.length > 0) {
        this.stomach = [];
      }
    };
    this.toString = function toString() {
      return ` ${this.name} ${this.age}`;
    };
  }
  let p1 = new Person("Artiom", 24);
  p1.eat("sweet");
  console.log(p1);
  