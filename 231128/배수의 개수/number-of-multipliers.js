const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let cnt = 0;
let cnt2 = 0

for(let i = 0; i<= 10; i++){
    if(Number(input[i]) % 3 === 0){
        cnt++
    }
    if(Number(input[i])% 5 === 0){
        cnt2++
    }
}

console.log(cnt, cnt2)