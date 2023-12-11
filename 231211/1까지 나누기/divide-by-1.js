const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let i = 0
let result = n
while(result >= 1){
    i++
    result = parseInt(result/i)

}
console.log(i)