const fs = require('fs')

const book = {
    tittle:'Lord og rings',
    author:'You',
    pages: 43
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync('1-json.json', bookJSON)