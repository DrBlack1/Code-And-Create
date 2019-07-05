const {argv} = require('yargs')
const tranx = require('./transactions')

let input = argv._[0]
// let input = process.argv[2]

if(input==='order'){
    console.log('Ordering...')
    tranx.addOrder(argv.tranx)

} else if(input==='load'){
    console.log('Loading Order..')
        let contents = tranx.loadOrders()
        console.log(contents)

    } else if(input==='remove'){
        console.log('Removing order..')
        tranx.removeOrder(argv.tranx)

    } else if(input==='list'){
        console.log('Listing order...')
        tranx.listOrders()

    } else {
        console.log('Unknown command')
    }
