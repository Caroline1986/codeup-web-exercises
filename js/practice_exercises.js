// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to
// search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array.

// Given:

// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
var fruits = ['apple', 'banana', 'orange', 'apple', 'pineapple'];
console.log(fruits.length)
fruits.forEach(allIndexesOf);
function allIndexesOf(array, item) {
    var item = fruits.indexOf[""];
    console.log(fruits, "apple")
}







// Define a function named removeAll(array, value) that takes in two arguments. The first argument should
// be an array and the second argument should be a value you wish to remove
// Given:
    var bugs = ['mosquito, “ant”, “scorpion”, “ant”, “ant”, “mosquito”, “typo”, “reference error”, “type error'];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

function removeAll(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);

    }

}
console.log(removeAll(bugs, "ant"))

// Make a function called coinFlip() that returns either 0 or 1, randomly
function coinFlip() {
    return Math.floor(Math.random() * (2) + 0);
}
console.log(coinFlip())

// Make a function called twoDice() that returns the sum of rolling two six sided dice.
function twoDice() {
var diceOne = Math.floor(Math.random() * (6) + 1);

var diceTwo = Math.floor(Math.random() * (6) + 1);
    console.log("diceTwo = " + diceTwo + " diceOne = " + diceOne + " is: " +(parseInt(diceTwo + diceOne )));

return diceOne + diceTwo;
}
console.log(twoDice());

// Make a function called twentySidedDie() that returns a random integer between 1 and 20.
function twentySideDie() {
   var dice = Math.floor(Math.random() * (20) + 1);
   return dice
}
console.log(twentySideDie());

// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
function twelveSideDie() {
    var dice = Math.floor(Math.random() * (12) + 1);
    return dice
}
console.log(twelveSideDie());


// Make a function called tetrahedron() that returns a random integer between 1 and 4.
function tetrahedron() {
    var four = Math.floor(Math.random() * (4) + 1);
    return four;
}

console.log(tetrahedron());
// Make a function called rollDie() that returns an integer between 1 and 6.
function rollDie() {
    var die = Math.floor(Math.random() * (6) + 1);
    return die
}

console.log(rollDie())