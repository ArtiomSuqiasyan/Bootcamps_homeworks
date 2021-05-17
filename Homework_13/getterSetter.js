const obj = {
  _name: [],
  get name() {
    return obj._name;
  },
  set name(value) {
    let names = value.split(", ");
    for (let i = 0; i < names.length; i++) {
      obj._name.push([names[i], names[i].length]);
    }
  },
};
obj.name = "Vrezh, Artavazd, Artiom, Arev";
console.log(obj.name);
