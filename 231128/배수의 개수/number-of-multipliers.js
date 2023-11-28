const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let cntA = 0, cntB = 0;

for(let i = 0; i< 10; i++){
    if(Number(input[i]) % 3 === 0){
        cntA++
    }
    if(Number(input[i])% 5 === 0){
        cntB++
    }
}

console.log(cntA, cntB)