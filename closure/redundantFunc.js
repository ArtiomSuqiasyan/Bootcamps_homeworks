function redundant (str = "") {
    return () => str
}

const f1 = redundant("apples");
console.log(f1())
const f2 = redundant("pear");
console.log(f2())