const fs = require('fs')
const input = Number(fs.readFileSync(0).toString())


const fixed = input * 30.48
console.log(fixed.toFixed(1))