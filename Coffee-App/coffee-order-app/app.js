// crate a node app, which TAKES A COFFEE ORDER. the coffee orders should be stored in a JSON file and you should be able to list all the coffee orders and delete them as well 

// create yargs and require it 
const {argv} = require('yargs')

// require coffeeOrders 
const coffeeOrder = require('./coffeeOrders/coffeeOrders')

// store 3rd variable 
// let command = process.argv[2]; 
let command = argv._[0]; 

// // console.log to see what we got back
// console.log(process.argv)
// // console.log yargs 
// console.log(yargs.argv)

if (command === 'add') {
    // console.log('adding coffee order')
    coffeeOrder.addCoffeeOrder(argv.order)
}
else if (command === 'remove') {
    // console.log('removing coffee order')
    coffeeOrder.removeCoffeeOrder(argv.order)
}
else if (command === 'read') {
    // console.log('reading coffee order')
    let contents = coffeeOrder.loadCoffeeOrders(argv.order)
    console.log(contents); 
}
else if (command === 'list') {
    // console.log('listing coffee order')
    coffeeOrder.listCoffeeOrders(); 
}
else {
    console.log('unkown order')
}

/* 
// command add: 
node app.js add --order="esspresso"

// command remove: 
node app.js remove --order="esspresso"

// command read: 
node app.js read

// command list: 
node app.js list 
*/ 