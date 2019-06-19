document.addEventListener('DOMContentLoaded', function() {

    // change h1 tag to blue 
    document.querySelector('.blue').style.color = 'blue'; 

    // put all your elements inside div 
    // Create new item div
     /* 
        <div id=“wrapper”>
        <h1> hello </h1>
        </div>
    */
  
    // create new div element 
    const myDiv = document.createElement('div');
    // add new id 
    myDiv.id = "wrapper"; 
        
    // create new h1 element
    const newH1 = document.createElement('h1'); 
    // give it some content 
    var node = document.createTextNode("hello"); 
    // add content and elements to node 
    newH1.appendChild(node); 
    myDiv.appendChild(newH1); 
    // add div content and element into the DOM
    document.body.insertBefore(myDiv, button); 
        
    // make the background color of the div red
    let myDiv1 = document.getElementById('wrapper'); 
    myDiv1.style.backgroundColor = 'red';
    
    // give the div a border radius of 20px
    myDiv1.style.borderRadius = '20px'; 

    // give the div a padding of 50px 
    myDiv1.style.padding = "50px"; 
  
    // Add an event listener to your div so that when the div is clicked, it changes the background colour to green.
    myDiv.addEventListener('click', () => {
        myDiv.style.backgroundColor = "green"; 
    }); 

    // Add an event listener to the button which when clicked turns multiple text elements white; (hint: you may need to use a ‘for’ loop, to loop through an array).
    const newButton = document.getElementById('button'); 

    newButton.addEventListener('click', () => {
        newButton.style.color = "white"; 
        document.querySelector('h1').style.color = "white"; 
    })
}); 

