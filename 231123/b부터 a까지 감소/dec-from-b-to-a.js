const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])

let result = ''
for(let i = b; i>=a; i--){
    result += i + ' '
}
console.log(result)