const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')


const a = input[0]
const b = Number(input[1])
const c = Number(input[2])


console.log(a)
console.log(b.toFixed(2))
console.log(c.toFixed(2))