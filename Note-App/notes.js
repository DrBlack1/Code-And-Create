// this is where we will create our functions to add notes, delete notes, read notes and list all the notes 
const fs = require('fs')

const addNote = (myNotes) => {
    const allNotes = loadNotes();
    allNotes.push({Reminder: myNotes});
    saveNotes(allNotes);  
    
    // console.log(myNotes)
}

// utility funtion for other functions 
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notesJSON = dataBuffer.toString(); 
        return JSON.parse(notesJSON); 
    }
    catch (e){
        return []; 
    }
}

// create and save notes.json file
const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes); 
    fs.writeFileSync('notes.json', notesJSON)
}

// list notes 
const listNotes = () => {
    const allNotes = loadNotes(); 

    allNotes.map((note) => {
        console.log(note.Reminder)
    })
}

// remove notes 
const removeNote = (deletedNote) => {
    const allNotes = loadNotes(); 

    const notesToKeep = allNotes.filter((note) => {
        return note.Reminder !== deletedNote; 
    })

    saveNotes(notesToKeep); 
}

// export and require addNote
module.exports = {
    addNote,
    loadNotes, 
    saveNotes, 
    listNotes, 
    removeNote
}

