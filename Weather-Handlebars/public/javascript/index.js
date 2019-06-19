let form = document.getElementById('form');
let input = document.getElementById('locationInput');

console.log('iuyguyf')
form.onsubmit = getWeather;

async function getWeather() {
    event.preventDefault();
    let location = input.value;

    let weather = await fetch(`http://localhost:3000/weather?location=${location}`);
    let obj = await weather.json();
    console.log(weather)
}