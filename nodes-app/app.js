const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
const { demandOption, argv } = require('yargs')

const command = process.argv[2]

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        tittle: {
            describe: 'Note tittle',
            demandOption: true
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.tittle, argv.body)
    }    
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        tittle: {
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)  {
        notes.removeNote(argv.tittle)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List yours notes',
    handler (argv)  {
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder:{
        tittle: {
            describe: 'Note tittle',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => notes.readNote(argv.tittle)
})

console.log(yargs.argv)

