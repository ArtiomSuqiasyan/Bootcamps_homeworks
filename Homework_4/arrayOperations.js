let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let idx = styles.length / 2;
styles.splice(styles.length / 2, 1, "Classics");
console.log(styles.shift());
styles.unshift("Rap", "Regage")
console.log(styles);
