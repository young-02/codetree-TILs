const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let result = ''
for(let i = 1; i <= 8; i++){
   result += input
}

console.log(result)