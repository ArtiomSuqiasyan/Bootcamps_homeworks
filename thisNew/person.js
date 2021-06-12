function Person(name, age) {
  let person = {
    name,
    age,
    compareAge(obj) {
      if (this.age > obj.age) {
        return `${this.name} is older than ${obj.name}`;
      } else if (this.age < obj.age) {
        return `${this.name} is younger than ${obj.name}`;
      } else {
        return `${this.name} is the same age as ${obj.name}`;
      }
    },
  };
  return person;
}
const p1 = Person("Samuel", 24);
const p2 = Person("Joel", 36);
const p3 = Person("Lily", 24);
console.log(p1.compareAge(p2));
console.log(p1.compareAge(p3));
console.log(p2.compareAge(p1));
