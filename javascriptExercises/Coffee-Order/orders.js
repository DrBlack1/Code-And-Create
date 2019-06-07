const fs = require("fs");

const addOrder = (customerName, coffeeType, coffeeSize, coffeePrice) => {
  const allOrders = loadOrders();
  allOrders.push({ Name: customerName, Type: coffeeType, Size: coffeeSize, Price: coffeePrice });
  saveOrders(allOrders);
};

const loadOrders = () => {
  try {
    const dataBuffer = fs.readFileSync("orders.json");
    const ordersJSON = dataBuffer.toString();
    return JSON.parse(ordersJSON);
  } catch (e) {
    return [];
  }
};

const saveOrders = (orders) => {
  const ordersJSON = JSON.stringify(orders);
  fs.writeFileSync("orders.json", ordersJSON);
};

const listOrders = () => {
  const allOrders = loadOrders();

  allOrders.map(orders => {
    console.log(orders.Order);
  });
};

const removeOrder = (deletedOrder) => {
  const allOrders = loadOrders();
  const ordersToKeep = allOrders.filter(orders => {
    return orders.Order !== deletedOrder;
  });
  saveOrders(ordersToKeep);
};

module.exports = {
  addOrder,
  listOrders,
  removeOrder
};
