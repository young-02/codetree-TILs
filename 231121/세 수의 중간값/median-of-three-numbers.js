const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])


console.log(b > a && b < c ? 1 :0)