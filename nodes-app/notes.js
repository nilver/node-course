const fs = require('fs')
const chalk = require('chalk')

console.log('starting note.js')

const addNote = (tittle, body) => {
    
    //const duplicatesNotes = notes.filter((e) => e.tittle=== tittle)

    const findDuplicate = notes.find((e) => e.ttitle === tittle)
    
    if(!findDuplicate){
        notes.push({
            tittle: tittle,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    }else {
        console.log('Note tittle taken')
    }
}

const saveNotes =  (notes) => {
    const dataJSOn = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSOn)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []  
    }
}

const removeNote = (tittle) => {
    const notes = loadNotes()
    
    const removed = notes.filter(function(e){
        return  e.tittle !== tittle
    })
    if(removed.length !== notes.length){
        saveNotes(removed)
        console.log(chalk.green.inverse('note was removed !'))
    }else{
        console.log(chalk.red.inverse('tittle isn´t present'))
    }
}

const listNotes = () => {
      
    const notes = loadNotes();
    
    notes.forEach(element => {
        console.log(chalk.blue(element.tittle))
    }); 

}
//read a note by tittle

const readNote = (tittle) => {

    const notes = loadNotes()

    const note = notes.find((e) => {
        return e.tittle === tittle
    })
  
    if(note){
        console.log(chalk.green.inverse(note.tittle))
        console.log(note.body)
    }else{

        console.log(chalk.red.inverse('Tittle not found!'))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
} 