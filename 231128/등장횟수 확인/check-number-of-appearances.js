const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let cnt = 0

for(let i = 0; i<=input.length-1; i++){

    if(Number(input[i])%2 === 0){
        cnt++
    }
}

console.log(cnt)