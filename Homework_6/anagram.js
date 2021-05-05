function getAnagram(str, arr) {
  str = str.split("").sort().join("");
  let anagrams = [];
  for (let i = 0; i < arr.length; i++) {
    if (str === arr[i].split("").sort().join("")) {
      anagrams.push(arr[i]);
    }
  }
  if (anagrams.length === 0) {
    return "Not found";
  }
  return anagrams;
}

console.log(getAnagram("listen", ["enlists", "google", "inlets", "banana"]));
