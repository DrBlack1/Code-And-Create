// div 1th version 
// let counter1 = 0; 
// function count1() {
//     counter1++; 
//     document.getElementById("counter1").innerHTML = counter1; 
// }

// div 2nd version
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count2; 

let counter2 = 0; 

function count2() {
    counter2++; 
    document.getElementById("counter2").innerHTML = counter2; 
    
    if (counter2 % 10 === 0) {
        alert(`Counter is at ${counter2}`); 
    }
}
})