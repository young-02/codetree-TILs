const fs = require('fs')
const input =fs.readFileSync(0).toString()

const n = Number(input)
 
let result = ''

let num = 0

for(let i = n; i <= 100; i++){
    if(i%n === 0){
       num++
       if(num <= 5){
         result +=(i + ' ')
       }
    }
}

console.log(result)