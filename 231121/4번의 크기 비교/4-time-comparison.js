const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')
const a = Number(input[0])
const str =input[1].split(' ')
const b = Number(str[0])
const c = Number(str[1])
const d = Number(str[2])
const e = Number(str[3])

console.log(a > b ? 1:0) 
console.log(a > c ? 1:0) 
console.log(a > d ? 1:0) 
console.log(a > e ? 1:0)