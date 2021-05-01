function replace_ (sent, arr){
    let newSent = "";
    let idx = 0
    for(let i = 0; i < sent.length; i++){
      if(sent[i] === "_"){
        newSent +=arr[idx];
        idx++
      } else {
        newSent += sent[i]
      }
    }
    return newSent
  }
  console.log(replace_("_, we have a _.", ["Houston", "problem"]));
  