let login = prompt("please, enter login");
if(login === "Admin"){
    let password = prompt("please, enter a password");
    if(password === "TheMaster"){
        alert("Welcome")
    } else if(password === null){
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
} else if(login === "" || login === null){
    alert("Canceled")
} else {
    alert("I don’t know you")
}