

do {
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));
    if (userNumber % 2 === 0)
        alert(userNumber + " is not odd.")
    else if (userNumber < 1 || userNumber > 50)
        alert(userNumber + " is not between 1 and 50.");
    else if (isNaN(userNumber))
        alert(userNumber + " is not a number.");
    else {
        alert("Awesome!");
        break;
    }
}

while (true)
for(var i = 1; i <= 50; i += 2){
    if(i === userNumber){
        console.log("Yikes! Skipping number: " + userNumber)
        continue;
    }
    console.log("Here is an odd number:" + i);
}

