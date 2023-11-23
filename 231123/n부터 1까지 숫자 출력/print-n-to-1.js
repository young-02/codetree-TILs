const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let i = n;
let result=''
while(i >= 1){
    result += i+ ' '
    i--
}
console.log(result)