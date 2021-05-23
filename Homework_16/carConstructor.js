function Car(model, milesPerGallon) {
  this.model = model;
  this.tank = 0;
  this.odometer = 0;
  this.milesPerGallon = milesPerGallon;
  this.fill = function (gallons = 0) {
    return (this.tank += gallons);
  };
  this.drive = function (distance = 0) {
    let maxDistance = this.milesPerGallon * this.tank;
    if (distance >= maxDistance) {
      this.tank = 0;
      return "i can drive";
    }
    this.tank = this.tank - distance / milesPerGallon;
    return this.tank;
  };
}
let p1 = new Car("merc", 10);
p1.fill(2);
console.log(p1.drive(20));
