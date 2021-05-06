function add_suffix(suffix = "") {
  return (str) => str + suffix;
}

const add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));
console.log(add_ly("total"));

const add_less = add_suffix("less");
console.log(add_less("fear"))