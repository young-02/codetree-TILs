const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const n = Number(input[0])
let sum = 0;

for(let i = 0; i<= n; i++){
  
  if(n % 2 === 1 && Number(input[i]) % 3 === 0){
         sum+= Number(input[i])
  }
}

console.log(sum)