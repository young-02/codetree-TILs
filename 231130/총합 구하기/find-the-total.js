const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])

let sum = 0

for(let i = a; i<=b; i++){
    if( i % 6 === 0  && i % 8 !== 0){
       sum += i
    }
}
console.log(sum)