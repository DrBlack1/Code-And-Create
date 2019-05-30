/*
	This is a snippet of a program checks to ensure that the 
	flower shop charges the correct amount of money for
	the flowers that it sells
*/

const priceOfFlower = 0.62;
let numberOfFlowers = 12;
console.log(priceOfFlower * numberOfFlowers);
if (Math.round(priceOfFlower * numberOfFlowers * 100) / 100 == 7.44) {
  console.log("making transaction");
} else {
  console.log("transaction failed");
}
console.log(Math.PI);
