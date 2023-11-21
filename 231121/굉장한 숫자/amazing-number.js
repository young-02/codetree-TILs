const fs = require('fs')
const input = fs.readFileSync(0).toString()

const n = Number(input)

console.log((n % 2 === 1 && n %3 === 0) || (n%2 === 0 && n %5 === 0) ? 'true' : 'false')