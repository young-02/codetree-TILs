const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

let a = Number(input[0])
let b = Number(input[1])

let temp = a
a = b
b = temp

console.log(a,b)