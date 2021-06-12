function usedFilter(arr) {
  let results = arr.filter(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );
  return results;
}

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

console.log(usedFilter(arr));
