"use strict"
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

 function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min +1) + min);
 }

 // for var i = 1; i <= 10; i++) {
 //    var randomNumber = getRandomInt (20, 200);
 //    if (randomNumber % 2 === 0) {
 //        console.log(randomNumber + ' even');
 //    } else {
 //        console.log (randomNumber + ' odd');
 //    }
 // }
    //Another one:
 for (var i = 1; i <= 10; i++) {
        var random = Math.floor(Math.random() * 180) + 20;
        console.log(random);
        if (random % 2 === 0) {
            console.log(random + " is even");
        } else if (random % 2 === 1) {
            console.log(random + " is odd");
        }
    }

    for (var i = 1; i <= 9; i++) {
        console.log(i.toString().repeat([i]));
    }
//
// for (var i = 1; i <= 9; i++) {
//     var result = "";
//     for (var j = 0; j <= i; j++) {
//         result += i;
//     }
//     console.log(result);
// }
    //or...

    for (var i = 100; i >= 5; i -= 5) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }

