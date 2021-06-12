class Account {
  constructor(id, name, balance) {
    this.id = id;
    this._name = name;
    this._balance = balance;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof this._name !== "string") {
      throw new Error("Invalid name");
    }
    this._name = name;
  }

  get balance() {
    return this._balance;
  }

  set balance(balance) {
    if (typeof this._balance !== "number" || Number.isNaN(balance)) {
      throw new Error("Invalid balance");
    }
    this._balance = balance;
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (amount > this.balance) {
      throw new Error("Amount exceeded balance.");
    }
    this.balance -= amount;
    return this.balance;
  }

  transferTo(anotherAccount, amount) {
    this.debit(amount);
    anotherAccount.credit(amount);
    return this.balance;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst.id === accountSecond.id;
  }

  toString() {
    return `${this.name} have a ${this.balance} $`;
  }
}

let artiom = new Account("1", "Artiom", 1.3);
let hovo = new Account("2", "Hovo", 1000000);
console.log(artiom.toString());
console.log(hovo.toString());
hovo.transferTo(artiom, 1000000);
console.log(artiom.toString());
console.log(hovo.toString());
