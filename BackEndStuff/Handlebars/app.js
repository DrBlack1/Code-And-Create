const hbs = require('express-handlebars')
const express = require('express')
const path = require('path')

const app = express()

app.engine('.hbs',hbs({defaultLayout: 'layout',extname:'.hbs'}))
app.set('view engine','.hbs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
    let Obj = {
        title: "something",
        subtitle: "something else"
    }
    res.render('index', {title:'aaaaaay'})
})

app.listen(3000,()=>{
    console.log('Ive been to the port 3000!')
})



