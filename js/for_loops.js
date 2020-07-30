function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var total = (num * i);
        console.log(num + " x " + i + " = " + total);
        // if (total % 2 === 0) {
        //     console.log(total + " is even");
        // } else if (total % 2 === 1) {
        //     console.log(total + " is odd");
        // }
    }
}
console.log(showMultiplicationTable(7));


for (var i = 1; i <= 10; i++)
{
    var random = Math.floor(Math.random() * 200) + 20;
    console.log(random);
    if (random % 2 === 0) {
        console.log(random + " is even");
    } else if (random % 2 === 1) {
        console.log(random + " is odd");
    }
}

for (var i = 0; i < 10; i++);