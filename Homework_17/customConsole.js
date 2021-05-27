class CustomConsole {
    constructor(arg = "logs"){
        this.arg = arg
        this.logs = []
    }

    log(...arg){
        
        let strArg = [];
        arg.forEach((el) => strArg.push(JSON.stringify(el)))
        strArg = strArg.join(", ")
        this.logs.push(strArg)
        return `"${this.arg}: ${strArg}"`
    }

    history(start = 0, end = this.logs.length){
        return this.logs.slice(start, end)
    }

    clearHistory(){
        this.logs = [];
        return "''"
    }
}

let myConsole = new CustomConsole("Regular");
console.log(myConsole.log(1, 2, 3, [1, 2]))
console.log(myConsole.clearHistory())