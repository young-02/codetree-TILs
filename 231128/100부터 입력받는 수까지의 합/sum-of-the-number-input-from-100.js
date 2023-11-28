const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let sum = 0
for(let i =n; i<=100; i++){
    sum+=i
}
console.log(sum)