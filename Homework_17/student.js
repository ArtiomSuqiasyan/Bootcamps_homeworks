class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    if (typeof this._firstName !== "string") {
      throw new Error("Invalid firstname");
    }
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    if (typeof this._lastName !== "string") {
      throw new Error("Invalid lastname");
    }
    this._lastName = lastName;
  }

  get gender() {
    return this._male;
  }

  set gender(gender) {
    if (this._gender !== "male" && this._gender !== "female") {
      throw new Error("Invalid gender");
    }
    this._gender = gender;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof this._age !== "number" || this._age < 0) {
      throw new Error("Invalid age");
    }
    this._age = age;
  }

  toString() {
    return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
  }
}

let me = new Person("Artiom", "Suqiasyan", "male", 24);
console.log(me.toString());

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
  }
  get year() {
    return this._year;
  }

  set year(year) {
    if (typeof this._year !== "number" || Number.isNaN(this._year)) {
      throw new Error("Invalid year");
    }
    this._year = year;
  }

  passExam(exams) {
    let checkExams = exams.every((el) => el.grade >= 50);
    if (checkExams) {
      this.year++;
      return true;
    }
  }

  toString() {
    return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
  }
}

let a = new Student("Art", "Suqias", "male", 17, 1);
let exams = [
  { programName: "math", grade: 50 },
  { programName: "english", grade: 60 },
];
console.log(a.passExam(exams));
console.log(a.toString());
