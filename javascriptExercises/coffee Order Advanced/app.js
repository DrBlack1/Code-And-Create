// Dependencies
const yargs = require('yargs');
const orders = require('./orders.js');

const command = process.argv[2];

console.log(yargs.argv);


switch(command) {

  case 'add':
    orders.addOrder(yargs.argv.order);
    break;
  
  case 'remove':
    orders.removeOrder(yargs.argv.order);
    break;

  case 'list':
    orders.listOrders();
    break;

  default:
    console.log('Not a command!');
    break;
}



