function readNumber(){
    while(true){
        let number = prompt("Please, enter a number");
        if(number === null || number === ""){
            return "Cancel";
        }
    }
}
readNumber()