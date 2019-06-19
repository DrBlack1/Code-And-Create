// here we will create our functions to add orders, delete them, read orders and list all of the orders

// fs stores this json file in its own json file 
const fs = require('fs'); 

// add coffee orders
const addCoffeeOrder = (myCoffeeOrder) => {
    // console.log(myCoffeeOrder)
    const allCoffeOrders = loadCoffeeOrders(); 
    allCoffeOrders.push({Order: myCoffeeOrder}); 

    saveCoffeeOrders(allCoffeOrders); 
}

// store our coffee orders and retrive them
const loadCoffeeOrders = () => {
    try {
        // read the contenst of json file and store it in a variable 
        const dataBuffer = fs.readFileSync('coffeeOrders.json')
        const orderJSON = dataBuffer.toString(); 
        return JSON.parse(orderJSON); 
    }
    catch (e) {
        return []; 
    }
}

// save our coffee orders 
const saveCoffeeOrders = (orders) => {
    const ordersJSON = JSON.stringify(orders)

    // store our json data in its own file using writeFileSync
    fs.writeFileSync('coffeeOrders.json', ordersJSON)
}

// list our coffe order 
const listCoffeeOrders = () => {
    const allCoffeOrders = loadCoffeeOrders(); 

    allCoffeOrders.map((order) => {
        console.log(order.Order); 
    })
}

// remove coffee order 
const removeCoffeeOrder = (deletedOrder) => {
    const allCoffeOrders = loadCoffeeOrders(); 

    const ordersToKeep = allCoffeOrders.filter((order) => {
        return order.Order !== deletedOrder; 
    })
    saveCoffeeOrders(ordersToKeep); 
}

// export coffeeOrders 
module.exports = {
    addCoffeeOrder, 
    loadCoffeeOrders, 
    saveCoffeeOrders, 
    listCoffeeOrders, 
    removeCoffeeOrder
} 