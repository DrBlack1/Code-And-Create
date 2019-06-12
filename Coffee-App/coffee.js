const fs = require('fs');
const person = document.getElementById("name");
var size = document.getElementById("size")
var coffee = document.getElementsByClassName("drink")[1, 3, 4, 5, 6]

const addOrder = (person, coffee, size) => {

    const allOrders = loadOrder();
    allOrders.push({
        Reminder: myOrder
    })
    saveOrder(allOrders)
}

const orderSize = (size) => {
    const s = small
    const m = medium
    const l = large
}

const orderPrice = (price) => {

}

const loadOrder = () => {
    try {
        const dataBuffer = fs.readFileSync("order.json");
        const orderJSON = dataBuffer.toString();
        return JSON.parse(orderJSON)

    } catch (e) {
        return [];
    }
}



const saveOrder = (order) => {
    const orderJSON = JSON.stringify(order)
    fs.writeFileSync('order.json', orderJSON)
}

const listOrder = () => {
    const allOrders = loadOrder();

    allOrders.map((order) => {
        console.log(order.Reminder)
    })
}

const removeOrder = (deletedOrder) => {
    const allOrders = loadOrder();

    const ordersToKeep = allOrders.filter((order) => {
        return order.Reminder !== deletedOrder
    })
    saveOrder(ordersToKeep);
}

module.exports = {
    addOrder,
    loadOrder,
    saveOrder,
    removeOrder,
    listOrder
}