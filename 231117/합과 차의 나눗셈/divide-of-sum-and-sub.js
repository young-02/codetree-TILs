const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])

const plus = a+b
const minus = a-b

const division = plus/minus

console.log(division.toFixed(2))