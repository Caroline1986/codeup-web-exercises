console.log("Hello from external JavaScript")
alert("Welcome to my Website!");
var response = prompt("What is your favorite color?")
alert ("Great, " + response + " is my favorite color, too!")

var movies = [
    {title: "Brother Bear", days: 5},
    {title: "Hercules", days: 1},
    {title: "The Little Mermaid", days: 3},
]

var pricePerDay = 3;

var totalPrice + 0;

movies.forEach(function(mocie) {
    totalPrice += pricePerDay * movie.days;
});

console.log("We will pay: $" + totalPrice.toFixed(2) + ".");

// var price = 3;
// var lm = 3;
// var bb = 5;
// var herc = 1;
// var subtotal = lm + bb + herc;
// var mtotal = subtotal * price;
// console.log ("$" + totalPrice.toFixed(2) + ".")




// var googleR = prompt("How much does Google pay?");
// var amazonR = prompt("How much does Amazon pay?");
// var facebookR = prompt("How much does Facebook pay?");
// var gtotal = prompt("How many hours did you work at Google?");
// var atotal = prompt("How many hours did you work at Amazon?");
// var ftotal = prompt("How many hours did you work at Facebook?");
// var intg = parseInt(googleR * gtotal);
// var inta = parseInt(amazonR * atotal);
// var intf = parseInt(facebookR + ftotal);
// console.log("This week we made: $" + intg + inta + intf);

var jobsWorked = [
    {company: "Google", rate: 400, hours: 6},
    {company: "Facebook", rate: 350, hours: 10},
    {company: "Amazon", rate: 380, hours: 4},

]
var totalPayment = 0;
jobsWorked.forEach(function(job)
{
    var amuntParid = job.rate *job.hours;
    consol.log("I made " + amountPaid + " from " + job.company + ".")
})
console.log("In total I made: " + totalPayment);



var classFull = false;
var conflicts = false;
var canEnroll = ! classFull && ! conflicts;
console.log(canEnroll);



var itemsBought = 3;
var offerValid = true;
var isPremium = true;
var canApply = offerValid && (itemsBought > 2 || isPremium);
console.log(canApply);

