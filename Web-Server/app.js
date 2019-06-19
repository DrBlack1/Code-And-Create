const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser')

// create an instance of express so we can use it 
// express() - is a method / function 
// this is how we start express, and allows us to use it. 
const app = express();

// public dir variable 
const publicDirectory = path.join(__dirname, './public')
console.log(publicDirectory)

// creating the path to display for the user
app.use(express.static(publicDirectory))

// set up bodyParser -> telling express how to use bodyParser
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json())


// app.get() -> takes 2 parameters: stirng and a function 
// "/" - index page, home directory 
app.get('/', (req, res) => {
    // inside the get method, we use the send method on the response object. 
    // we can only ever use res.whatever once!! 

    res.render('index')
    // res.send("what is the answer to life, the universe and everything?") // res.send -> sends string // res.render // res.redirect etc 

})

// in order to save user inout anywhere 
app.post('/', (req, res) => {
    // use bodyParser 
    let name = req.body.book // able to access body because of the body parser, otherwise we wouldbe be able to 
    console.log(req.book)

    res.send(name) // ('great name')
})

// /about' -> opens up another page 'about' 
app.get('/about', (req, res) => {
    res.send('<h1>hello, I am here to stay<//h1>')
})

app.get('/name', (req, res) => {
    let person = {
            name: "Eminnem: slim shady..",
            age: "none of your businesss"
        }

    // res.send(person)
    res.send(`hello, my name is ${person.name}`)
})

// res.query -> connects front-end with back-end. so in your url type: /items?key=value&dylan=not%20tired
app.get('/items', (reg, res) => {
    console.log(reg.query)
    res.send({
        items: []
    })
})


// we usually keep the listen method at the bottom of our express app file 
// we need to listen for a request 
// app.listen(port number, () => {       
// })
// once we have set uo the listen method , if we run the app in the terminal it will start the server. 
app.listen(3000, () => {
    // console.log(__dirname)
    console.log('listening on port 3000')
})

// 



/// commands : 
/* 
pkill node -> kilss processes 
pkill -7 node -> nr -> kills "number" of nodes you'd like to kill 

// beautify :
commad + shift + P
*/