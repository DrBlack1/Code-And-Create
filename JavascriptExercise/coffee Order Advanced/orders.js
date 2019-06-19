const fs = require('fs');

// Load orders
const loadOrders = () => {
  try {
    const dataBuffer = fs.readFileSync('orders.json');
    const ordersJSON = dataBuffer.toString();
    // return ordersJSON;
    return JSON.parse(ordersJSON);
  } catch(e) {
    return[];
  }
}

// Add function
const addOrder = (order) => {
  let orderObj = JSON.parse(order)
  
  const allOrders = loadOrders();

  allOrders.push({Order: orderObj})

  saveOrders(allOrders);
}

// Remove order
const removeOrder = (removedOrder) => {
  const allOrders = loadOrders();
  const ordersToKeep = allOrders.filter((order) => {
    return order.Order !== removedOrder;
  });

  saveOrders(ordersToKeep);
}

// Save orders
const saveOrders = (orders) => {
  const ordersJSON = JSON.stringify(orders);

  fs.writeFileSync('orders.json', ordersJSON);
}

// List orders
const listOrders = () => {
  const allOrders = loadOrders();

  let i = 1;

  allOrders.map((order) => {
    console.log(i + order.Order);
    i++;
  });
}

module.exports = {
  loadOrders,
  addOrder,
  removeOrder,
  saveOrders,
  listOrders
}