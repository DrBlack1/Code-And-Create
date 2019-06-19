// Dependencies
const yargs = require('yargs');
const orders = require('./orders.js');

const command = process.argv[2];

switch(command) {

  case 'add':
    orders.addOrder(yargs.argv.orders);
    break;
  
  case 'remove':
    orders.removeOrder(yargs.argv.orders);
    break;

  case 'list':
    orders.listOrders();
    break;

  default:
    console.log('Not a command!');
    break;
}