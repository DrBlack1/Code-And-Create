const fs = require('fs')

const addOrder = (myOrders) => {
    const allOrders = loadOrders()
    allOrders.push(myOrders)
    saveOrders(allOrders)

    console.log(myOrders)
}
const loadOrders = () => {
    try {
        const dataBuffer = fs.readFileSync('orders.json')
        return JSON.parse(dataBuffer)
    } catch(e){
        return []
    }
}
const saveOrders = (orders) => {
    const ordersJSON = JSON.stringify(orders)
    fs.writeFileSync('orders.json',ordersJSON)
}
const listOrders = () => {
    const allOrders = loadOrders()
    allOrders.map((order) => {
        console.log(order)
    })
}

const removeOrder = (deletedOrder) => {
    const allOrders = loadOrders()
    const ordersToKeep = allOrders.filter((order) => {
        return order.Reminder !== deletedOrder
    })
    saveOrders(ordersToKeep)
}

module.exports = {addOrder,loadOrders,saveOrders,listOrders,removeOrder}