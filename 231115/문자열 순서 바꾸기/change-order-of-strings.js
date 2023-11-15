const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let s = input[0]
let t = input[1]

let temp = s
s = t
t = temp
console.log(`${s}
${t}
`)