const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])


let prod = 1
for(let i = a; i<=b; i++){
 prod *= i
}
console.log(prod)