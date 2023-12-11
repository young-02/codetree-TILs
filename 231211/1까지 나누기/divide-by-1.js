const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let i = 1
let count = 0
let result = n
while(result >= 1){
    result = parseInt(result/i)
    i++
    count++
}
console.log(count)