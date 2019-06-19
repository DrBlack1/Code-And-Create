/*

Level 2

Part one:
Look at the assignSecretSanta function, I've started this for you, you can choose to use what I've given you
or try again for yourself. This function wants to take a shuffleArray and check that no one gets themself, if they do
run shuffleArray again, and check again. Once no one has themselves return this combination.

Before you start see what happens if you give an array of names as the parameter to the function shuffleArray.

Part two:
Once you've done this edit the function printSecretSanta so it console.logs a list of who has who for Secret Santa.

Part three:
If you finish this try making a Secret Santa class that contains data about the secret santa for example who is involved,
who has who, how much can be spent what some people might like as gifts. You can include the function you've already
created as a method in this class to console.logs who has who.

*/




const shuffleArray = (myArray) => {
    let randomNum = 0
    let resortedArray = []
    let unsortedArray = []
    for (i=0; i<myArray.length;i++) {
        unsortedArray.push(myArray[i])
        }
    const numOfPeople = unsortedArray.length
    for (i=0; i<numOfPeople; i++) {
        randomNum = Math.floor(Math.random() * (numOfPeople - i))
        resortedArray.push(myArray[randomNum])
        myArray.splice(randomNum,1)
    }
    /* If you want to give shuffleArray a variable please
       change where it says nameOfArray to the name of your
       array variable.
       
        namesOfArray = unsortedArray
    */
    return [unsortedArray,resortedArray]

}


const assignSecretSanta = (names) => {
    possSecretSanta = shuffleArray(namesOfParticipants)
    while (true) {
        possSecretSanta = shuffleArray(possSecretSanta[0])
         
    }     
}        
          
const printSecretSanta = (secretSantaPeople) => {
    return "Fill in this gap"
}

console.log(printSecretSanta(['Sam', 'Dan', 'Stuart', 'Chris K', 'Rudolph', 'Cliff']))




