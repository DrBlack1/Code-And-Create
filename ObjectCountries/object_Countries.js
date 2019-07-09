// IDEA STAGE #1: Build an OBJECT that contains a bunch of data about countries in South America: name; population & language.

let countriesInSouthAmerica = [ 
    
    {name: "Argentina", 
    population: 43132000, 
    language: "Spanish"},

    {name: "Bolivia", 
    population: 10520000, 
    language: "Spanish"},

    {name: "Brazil", 
    population: 204519000, 
    language: "Portuguese"},

    {name:"Chile", 
    population: 18006000, 
    language: "Spanish"},

    {name: "Colombia", 
    population: 45549000, 
    language: "Spanish"},

    {name: "Ecuador", 
    population: 16279000, 
    language: "Spanish"},

    {name: "Guyana", 
    population: 747000, 
    language: "English"},

    {name: "Paraguay", 
    population: 7003000, 
    language: "Spanish"},

    {name: "Peru", 
    population: 31153000, 
    language: "Spanish"}, 

    {name: "Suriname", 
    population: 560000, 
    language: "Dutch"},

    {name: "Uruguay", 
    population: 3310000, 
    language: "Spanish"},

    {name: "Venezuela", 
    population: 30620000, 
    language: "Spanish"},

    {name: "Chad", 
    population: 13670084, 
    language: "French"},

];
 
/* IDEA STAGE #2: Create a function that randomly draws out two countries from the OBJECT above and then asigns each "Player" a country. 
    The "Player" with the larger country wins */

    //  A new VARIABLE needs to be created to store the "randomizer" code. The new variable is called 'currentCountry'
        /* The 'randomizer' code uses Math.floor to round the number to 0, the Math.random to return a random number between 0 and 1. Then, lastly, 
        multiply this by countriesInSouthAmerica.length to multiply it by the amount of values in the ARRAY above. */

    // A console.log has been used to report the result and allocated each "player" a country. 
        /* I have used TEMPLATE LITERALS to return specific information from the array. The Template Literals also use dot notation (i think??) to dig deeper into the Array information above. */

    // Now the two random countries have been allocated, I have used an IF/ELSE STATEMENT to compare the two populations. The populations are collected through dot notation.
       
// IDEA STAGE #3: Add a random country that will automatically terminate the game.

        /* I have also included a country outside of South America in my Array. If a player randomy receives Chad, they will automatically lose. 
            I have created a new VARIABLE called 'failCountry' and asigned it to entry 12 in the Array. Entry 12 is Chad.
            The first IF statement asks whether the randomly asigned country is equal to the fail country, if so a console log appears saying the game is over.*/

// IDEA STAGE #4: What if both players receive the same country?
        /* An additional ELSE IF statement has been added to check whether both players receive the same country. If they do, the console log reports a draw. */

    function countryPopulationChallenge () {

        let failCountry = countriesInSouthAmerica[12]
        let currentCountry = countriesInSouthAmerica[Math.floor(Math.random()*countriesInSouthAmerica.length)];
        console.log (`Player One\'s random country is: ${currentCountry.name}, which has a population of ${currentCountry.population} and their official language is ${currentCountry.language}`) 
        let currentCountry2 = countriesInSouthAmerica[Math.floor(Math.random()*countriesInSouthAmerica.length)];
        console.log (`Player Two\'s random country is ${currentCountry2.name}, which has a population of ${currentCountry2.population} and their official language is ${currentCountry2.language}`)

        if  (currentCountry == failCountry) {
            (console.log(`Player One has received ${currentCountry.name}. ${currentCountry.name} is not a country in South America. Game is terminated. Player Two wins.`))
        }

        else if (currentCountry2 == failCountry) {
            (console.log(`Player Two has received ${currentCountry2.name}. ${currentCountry2.name} is not a country in South America. Game is terminated: Player One wins.`))
        }

        else if (currentCountry === currentCountry2) {
            (console.log(`Both players have received ${currentCountry.name}. Game is a draw.`))
        }

        else if (currentCountry.population > currentCountry2.population){
            (console.log (`Who has the larger country? ${currentCountry.name} is larger than ${currentCountry2.name}. Player One wins.`))
        }
        else {
            (console.log (`Who has the larger country? ${currentCountry2.name} is larger than ${currentCountry.name}. Player Two wins.`))
        }
    }

    countryPopulationChallenge (); 



// console.log (countriesInSouthAmerica); // list all of the countries

// countriesInSouthAmerica.push ("England"); // add 'England' to the list

// console.log (countriesInSouthAmerica); // list countries with 'England' in the list

// countriesInSouthAmerica.sort(); // put in alphabetical order

// console.log (countriesInSouthAmerica); // list countries in alphabetical order

// countriesInSouthAmerica.pop(); // removes Venezuela

// console.log (countriesInSouthAmerica); // Venezuela has gone

// countriesInSouthAmerica.push ("Venezuela");

// console.log (countriesInSouthAmerica); // Venezuela is back


// This is how to console.log them all individually
// console.log (countriesInSouthAmerica [2]); 
// console.log (countriesInSouthAmerica [4]); 
// console.log (countriesInSouthAmerica [9]); 


    // for (let indexSouthAmerica = 0; indexSouthAmerica < countriesInSouthAmerica.length; indexSouthAmerica++){   
    //     console.log (countriesInSouthAmerica[indexSouthAmerica]) 

    // comment for github
    // second comment for github