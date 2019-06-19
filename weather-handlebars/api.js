const request = require('request')
// require util 
const {promisify} = require('util')
let promisifiedRequest = promisify(request); 
//const fs = require('fs'); 

// first request 
// return long and lat 

const mapboxRequest = async(location) => {
    const keyMapBox = 'pk.eyJ1IjoiYW5uYWdyb3N6ZWsiLCJhIjoiY2p3OWJsdGY2MGE0cTQ4a2JsMzRmYmZobyJ9.cNFhrFPAAAtacq8uzXXWPQ'

    const mapBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${keyMapBox}`
    
    let coordinates = await promisifiedRequest({url: mapBoxURL, json: true})

    let data = coordinates.body; 

    let long = data.features[0].geometry.coordinates[0]; 
    let lat = data.features[0].geometry.coordinates[1]

    return {
        long, 
        lat
    }
}


// second request 
// return contents of weather info -> weatherObj 

const darkSky = async(coordinates) => {

    const url = `https://api.darksky.net/forecast/4116e96820053585936415cf3201c3da/${coordinates.lat},${coordinates.long}`

    const weatherData = await promisifiedRequest({url: url, json:true})
    
    // create json object with weather data 
    // const orderJSON = JSON.stringify(weatherData); 
    // fs.wrtieFileSync('info.json', orderJSON)
    
    let weatherSummary = weatherData.body.daily.data[0].summary.toLowerCase(); 
    let weatherTemp = weatherData.body.daily.data[0].temperatureHigh
    // res.send(weatherObj)
    return {weatherSummary, weatherTemp}; 
}

module.exports = {
    mapboxRequest, 
    darkSky
}