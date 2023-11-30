const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let sum = 0
for(let i = 1; i<=n; i++){
 if( n % i === 0){
    if(i < n){
        sum+=i
    }
 }  
}

console.log( sum === n ? 'P':'N')