const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let cnt = 0

for(let i = 0; i<5; i++){
    const x = Number(input[i])
    if(x %2 === 0){

        cnt++
    }
}

console.log(cnt)