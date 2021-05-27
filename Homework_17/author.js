class Author {
  constructor(name, email, gender) {
    this.name = name;
    this._email = email;
    this.gender = gender;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    const checkMail =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!checkMail.test(this.email)) {
      throw new Error("Invalid email");
    }
    this._email = email;
  }

  toString() {
    let gender;
    if (gender === "male") {
      gender = "Mr.";
    } else {
      gender = "Ms.";
    }
    return `${gender} ${this.name}`;
  }
}

let author = new Author("Rowling", "rowlingmail.com", "female");
console.log(author.toString());

class Book extends Author {
  constructor(name, email, gender, title, author, price = 0, quantity = 0) {
    super(name, email, gender);
    this.title = title;
    this.author = author;
    this._price = price;
    this.quantity = quantity;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    if (this._price < 0) {
      throw new Error("Invalid price");
    }
    this_price = price;
  }

  getProfit() {
    let profit = this.price * this.quantity;
    return profit;
  }

  toString() {
    return this.name;
  }
}
let garryPotter = new Book(
  "Rowling",
  "rowlingmail.com",
  "female",
  "Rowling",
  "Garry Potter",
  2,
  2
);
console.log(garryPotter.getProfit());
