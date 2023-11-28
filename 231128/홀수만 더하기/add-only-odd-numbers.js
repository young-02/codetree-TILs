const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')




let sum = 0;

for(let i = 0; i<= input.length-1; i++){
   let n = input[0]

   if(n % 2 === 1){
    if( input[i] !== n && Number(input[i]) % 3 === 0){
     sum += Number(input[i])
     }
   }
}

console.log(sum)