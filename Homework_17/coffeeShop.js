class coffeeShop {
  constructor(
    name,
    menu = [
      { name: "banana", price: 5, type: "food" },
      { name: "apple", price: 4, type: "food" },
      { name: "juice", price: 4, type: "drink" },
    ],
    orders = []
  ) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }
  addOrder(item) {
    let check = this.menu.some((el) => el.name === item);
    if (check) {
      this.orders.push(item);
      return this.orders;
    }
    return "This item is currently unavailable!";
  }

  fulfillOrder() {
    if (this.orders.length === 0) {
      return "All orders have been fulfilled!";
    }
    let answer = `The ${this.orders[0]} is ready!`;
    this.orders.shift();
    return answer;
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    let sum = 0;
    this.menu.forEach((el) => {
      if (this.orders.includes(el.name)) {
        sum += el.price;
        return sum;
      }
    });
    return sum;
  }

  cheapestItem() {
    let menuClone = this.menu.slice();
    menuClone.sort((a, b) => a.price - b.price);
    let minPrice = menuClone[0].price;
    let minNamesObj = menuClone.filter((el) => el.price === minPrice);
    let minNames = minNamesObj.map((el) => el.name);
    return minNames;
  }

  drinksOnly() {
    let drinksInObj = this.menu.filter((el) => el.type === "drink");
    let onlyDrinks = drinksInObj.map((el) => el.name);
    return onlyDrinks;
  }

  foodOnly() {
    let foodsInObj = this.menu.filter((el) => el.type === "food");
    let onlyFoods = foodsInObj.map((el) => el.name);
    return onlyFoods;
  }
}

let client = new coffeeShop();
console.log(client.dueAmount());
