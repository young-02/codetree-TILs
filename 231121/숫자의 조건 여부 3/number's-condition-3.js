const fs = require('fs')
const input = fs.readFileSync(0).toString()
const a = Number(input)

console.log(a %13 === 0 || a % 19 === 0 ? 'True' :'False')