const bcrypt = require('bcrypt');
const password = 'AyYyY4y$y4£y';
const {promisify} = require('util')

const bcryptHash = promisify(bcrypt.hash)
let compare = promisify(bcrypt.compare)


let hash = async(password) => {
    let hash = await bcryptHash(password,13);
    console.log(hash)
    let something = await compare(password,hash);
    console.log(something)
}
hash(password)

// bcrypt.hash(password,13,(err,hash) => {
//     if(err) throw err;
// })

// let compare = async(password) => {
// let response = await promisify(bcrypt.compare(password,hash)
// }
// console.log(compare(password))



// bcrypt.compare(password, hash, function(err, res) {
//     if(err) throw err;
//     console.log(res)
// });