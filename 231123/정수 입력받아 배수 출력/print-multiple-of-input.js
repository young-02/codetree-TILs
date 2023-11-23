const fs = require('fs')
const input =fs.readFileSync(0).toString()

const n = Number(input)
 
let result = ''

let num = 0
let len = Number.MAX_SAFE_INTEGER

for(let i = n; i < 1000; i++){
    if(i%n === 0){
       num++
       if(num <= 5){
         result +=(i + ' ')
       }
    }
}

console.log(result)