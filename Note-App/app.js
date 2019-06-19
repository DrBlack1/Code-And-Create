// add yargs module to my file using require method
const {argv} = require('yargs'); // const yargs

// export and require addNote
const _addNote = require('./notes')


// console.log(process.argv)
// console.log(argv)

// let command = process.argv[2]; 
let command = argv._[0]; 

if (command === "add") {
    _addNote.addNote(argv.note);
}
else if (command === "remove") {
    _addNote.removeNote(argv.note); 
}
else if (command === "read") {
    let contents = _addNote.loadNotes(argv.note); 
    console.log(contents)
}
else if (command === "list") {
    _addNote.listNotes();  
}
else {
    console.log('unknown bugger')
}
