(function(){
    "use strict";



    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|")
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var stringPlanets = planetsArray.join(" <br> ");
    console.log(stringPlanets);
//console.log(planetsArray.join(" <br> ");
    document.write(stringPlanets);

var newString = planetsArray.join("</li> <li>");
var listString = "<ul>" + "<li>" +newString + "</li>" + "</ul>"
    console.log(listString)
    document.write(listString)

//    ex1
//planetsList = "<ul><li>"+planetsArray.join("</li><li>")+"</li></ul

    // ex2
//    var planetsUL = "<ul>";
    // planetsArray.forEach(function(planet) {
    //     planetsUL =+ "<li>" + planet + "</li>;"
    // })
})();
