const fs = require('fs')
const input = fs.readFileSync(0).toString()

const n = Number(input)

let i = 1;
let result = ''

while(i <= n){
    result += i + ' '
    i++
}

console.log(result)