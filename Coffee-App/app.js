const yargs = require('yargs');
const order = require('./coffee.js')

const command = process.argv[2];

switch (command) {
    case "add":
        order.addOrder(yargs.argv.order);
        break;
    case "remove":
        order.removeOrder(yargs.argv.order);
        break;
    case "list":
        order.listOrder();
        break;

    default:
        console.log('nothing selected');
}