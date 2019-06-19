const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

const app = express(); 

// use path to set public folder 
app.use(express.static(path.join(__dirname, 'public')))

// use handlebars to create layouts 
app.engine('.hbs', handlebars({defaultLayout: 'layout', extname: '.hbs'}))

// telling handlebars that we'll use this as a new engine and use handlebars 
app.set('view engine', '.hbs')

// use express 
app.get('/', (req, res) => {
    let obj = {
        title: "Handlebars are cool!",
        subtitle: "smthing else.."
    }
    res.render('index', obj)
})

// to render to localhost 3000
app.listen(3000)