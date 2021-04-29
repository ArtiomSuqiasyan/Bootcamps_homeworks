function truncate(str, maxlength) {
    if(str.length <= maxlength){
        return str
    }
      return str.slice(0, maxlength - 3) + '...';
  }

  console.log(truncate("Hello, my name is Artyom, I em studien in ACA Bootcamps, ma teacher are Vrezh.", 20))