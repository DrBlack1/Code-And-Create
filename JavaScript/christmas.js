// create current date and calculate how many days left till Xmas 
today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) 
{
    xmas.setFullYear(xmas.getFullYear() +1); 
}  
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");


/* 
let currentDate = new Date(); 
let xmasDate = new Date("Dec 24, 2019 0:00:00")
// console.log(currentDate); 

let day = currentDate.getDate() // day of the month (0 - 31)
let month = currentDate.getMonth() + 1 // month + 1 - JS counts from 0
let year = currentDate.getFullYear() 

console.log(day + '-' + month + '-' + year)
let countDown = (12 - month) * 30
let 

/*
let countDown = xmasDate - currentDate
let oneDay = 1000 * 60 * 60 * 24; 
let x = oneDay * countDown; 
console.log(`We have ${y} days left till Christmas!`); 
*/ 

