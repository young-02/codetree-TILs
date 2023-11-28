const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])

let sumValue = 0
for(let i = a; i <= b; i++){
    sumValue +=i
}
console.log(sumValue)