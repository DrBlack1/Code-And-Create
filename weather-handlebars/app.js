const express = require('express');
const path = require('path');
const api = require('./api')
const handlebars = require('express-handlebars');

const app = express();
// use body parser for the form data 

const publicDirectory = path.join(__dirname, "./public")
app.use(express.static(publicDirectory));

app.engine('.hbs', handlebars({defaultLayout: 'layout', extname: '.hbs'}))

app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('index', {sum: 'bleh', title: 'title'})
})

app.get('/weather', async(req, res) => {
    let location = req.body.location; 
    
    // callback from the first function from our api.js 
    let coordinates = await api.mapboxRequest(location); 

    // callback from the 2nd request from our api.js 
    let weatherObj = await api.darkSky(coordinates)
    
    console.log(weatherObj.weatherSummary)
    // res.send(weatherObj.weatherSummary)
    res.render('index', {sum: weatherObj.weatherSummary, title: 'hello'});
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});





