const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

for(let i = 1; i<= input.length; i++){
   if(input[i] % 2 === 1 && input[i]%3 === 0){
    console.log(input[i])
   }
}