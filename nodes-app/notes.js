const { RSA_NO_PADDING } = require('constants')
const fs = require('fs')
const chalk = require('chalk')

console.log('starting note.js')

const getNotes1 = function () {
    return 'Your Notes...'
}

const addNote = function( tittle, body){
    const notes = loadNotes()

    const duplicatesNotes = notes.filter((e) => {
        return e.tittle=== tittle
    })
    if(duplicatesNotes.length === 0){
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

const saveNotes =  function (notes){
    const dataJSOn = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSOn)

}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []  
    }
}

const removeNote = function(tittle){
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


module.exports = {
    getNotes1: getNotes1,
    addNote: addNote,
    removeNote: removeNote
} 