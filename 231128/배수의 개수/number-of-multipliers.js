const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let cnt = 0;
let cnt2 = 0
let result = ''
for(let i = 0; i<=input.length; i++){
    if(input[i] % 3 === 0){
        cnt++
    }
    if(input[i]% 5 === 0){
        cnt2++
    }
    result= cnt + ' ' + cnt2
}

console.log(result)