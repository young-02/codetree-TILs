const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

let width = Number(input[0])
let length = Number(input[1])

width += 8
length *= 3

console.log(width)
console.log(length)
console.log(width * length)