const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')
const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])
console.log(`${a.toFixed(3)}
${b.toFixed(3)}
${c.toFixed(3)}`)