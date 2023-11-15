const fs = require('fs')
const input = Number(fs.readFileSync(0).toString())

const sum = input + 1.5

console.log(sum.toFixed(2))