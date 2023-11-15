const fs = require('fs')

const input = fs.readFileSync(0).toString().split('-')

const a = input[0]
const b = input[1]
const c = input[2]
console.log(`${a}-${c}-${b}`)