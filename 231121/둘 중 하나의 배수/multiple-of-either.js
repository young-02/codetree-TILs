const fs = require('fs')
const input = fs.readFileSync(0).toString()
const a = Number(input)

console.log(a % 3 === 0 || a % 5 === 0? 1 :0)