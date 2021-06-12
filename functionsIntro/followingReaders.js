function followingReaders(arr) {
    let books = []
  arr.sort((a, b) => b.percent - a.percent);
  for(let i in arr){
      if(arr[i]["readStatus"]){
        books.push(arr[i]["book"])
      }
  }
  return books
}

console.log(
  followingReaders([
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
  ])
);


