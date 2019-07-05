const mongoose = require('mongoose')
const User = require('./models/user')
const express = require('express')
const path = require('path')
const publicDirectory = path.join(__dirname, './public')
const bodyParser = require('body-parser')

const {promisify} = require('util')
const request = require('request')
let promisifiedRequest = promisify(request)

const app = express();

app.use(express.static(publicDirectory))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/signup',{
    useNewUrlParser:true
});

const user = new User({
    name: 'jim',
    email: 'm',
    password: 'may'
});

// user.save();
app.get('/',(req,res)=>{
    app.send('index')
})

// app.post('/',async(req,res)=>{
//     // let userData = req.body.user
//     // res.render(userData)
// })

User.find({}, (err,response) => {
    // let data = await promisifiedRequest({url:response, json:true})
    console.log(response)
})



// User.find({}, (err,response) => {
// })


app.listen(3000,()=>{
    console.log('listening on port 3000')
})

// to run server;
//$ ~/mongodb/bin/mongo
//$ ~/mongodb/bin/mongod