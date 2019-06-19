let today = new Date();

let christmas = new Date(today.getFullYear(), 11, 25) //month is zero indexed //day
if (today.getMonth() == 11 && today.getDate()> 25)
{
    christmas.setFullYear(christmas.getFullYear())
}
let secondsInDay = 1000*60*60*24;
console.log(Math.ceil((christmas.getTime()-today.getTime())/(secondsInDay))+" days left until Christmas!"); 
