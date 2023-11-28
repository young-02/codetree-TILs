const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let cnt = 0;
for(let i = 1; i< n; i++){
   if(i % 4 === 0){
        cnt++
     if(i % 100 === 0 && i % 400 !== 0){
        cnt--

      }
    }
}

console.log(cnt)