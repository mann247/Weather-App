const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = 'Gunther'
user.age = 54
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// // console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString() //converts to string
// const data = JSON.parse(dataJSON) //parses an object
// console.log(data.title) //return/logs the object




// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)