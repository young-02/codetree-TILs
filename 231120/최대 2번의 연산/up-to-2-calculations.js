const fs = require('fs')
const input = fs.readFileSync(0).toString()
let a = Number(input)


if(a % 2 === 0){
    a /= 2
}
if(a % 2 === 1){
    a =(a+1)/2
}

console.log(parseInt(a))