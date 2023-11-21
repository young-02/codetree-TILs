const fs = require('fs')
const input = fs.readFileSync(0).toString()
const a = Number(input)

console.log(a >= 10 && a <= 20 ? 'yes':'no')