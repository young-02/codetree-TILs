const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let count = 0
for(let i = 0; i <= input.length; i++){
    
    if(input[i] % 2 === 1){
        count++
    }
}

console.log(count)