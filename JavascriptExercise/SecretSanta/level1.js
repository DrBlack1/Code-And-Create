/*

Level 1

Take this code and edit the function printSecretSanta to console.log a list of who has who for Secret Santa.

Before you start see what happens if you give an array of names as the parameter to the function secretSanta.

If you finish this try making a class that helps create an object for everyone involved, this could include who
the person has, what they would like, etc for example who is involved. Also include methods that get
different bits of information that might be useful.

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
        checker = true
        for (i=0;i<possSecretSanta.length;i++) {
            if (possSecretSanta[0][i] === possSecretSanta[1][i]) {
                checker = false
            }
        }
        if (checker) {
            return possSecretSanta
        }
        
    }     
}        
          
const printSecretSanta = (secretSantaPeople) => {
    return "Fill in this gap"
}

console.log(printSecretSanta(['Sam', 'Dan', 'Stuart', 'Chris K', 'Rudolph', 'Cliff']))




