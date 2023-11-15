const fs = require('fs')

const input = fs.readFileSync(0).toString().split('-')

const mm = input[0]
const dd = input[1]
const yy = input[2]

console.log(`${yy}.${mm}.${dd}`)