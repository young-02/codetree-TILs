const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let cnt = 0
let cnt2 = 0
let cnt3 = 0

for(let i = 1; i <= n; i++){
    
    if(i % 12 === 0){
        cnt3++
    }
   
    else if(i % 3 === 0){
        cnt2++
    }
    else  if(i %  2 === 0){
        cnt++
    }

}

console.log(cnt, cnt2, cnt3)