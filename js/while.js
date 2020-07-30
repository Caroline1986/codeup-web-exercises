
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

var i = 2
while (i <= 65536) {
    console.log(i);
    i *= 2;
}
//
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones
// being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.
// This is a way get the random numbers for this exercise.
//     The output should be similar to the following:
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones


var allCones = Math.floor(Math.random() * 50) + 50;
console.log ("I am starting with " + allCones + " cones.");
do {
    var cones = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - cones;
    console.log("I sold " + cones + " cones.");
    if (cones > allCones) {
        console.log("I can not sell you you " + cones + " cones. I only have " + allCones + " cones...");
    }

} while (allCones > 0);
console.log("No more cones!")
