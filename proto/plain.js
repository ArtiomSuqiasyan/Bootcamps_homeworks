const airPlane = {
  name: "",
  isFlying: false,
  takeOf() {
    return (airPlane.isFlying = true);
  },
  land() {
    return (airPlane.isFlying = false);
  },
};
let obj = {
  __proto__: airPlane,
  isFlying: false,
};
console.log(obj.takeOf());
