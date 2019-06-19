const event1 = document.getElementById("keyPressed")
const event2 = document.getElementById("eventKey")
const event3 = document.getElementById("eventCode")
const event4 = document.getElementById("eventWhich")



document.addEventListener("keypress", () => {
   event1.innerHTML = event.which;
   event2.innerHTML = " " + event.code;
   event3.innerHTML = " " + event.which;
   event4.innerHTML = " " + event.key;
});