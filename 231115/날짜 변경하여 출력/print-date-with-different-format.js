const fs = require('fs')
const input = fs.readFileSync(0).toString().split('.')
const yy = input[0]
const mm = input[1]
const dd = input[2]

console.log(`${mm}-${dd}-${yy}`)