const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)
// 6
// 1,2,3
let sum = 0
for(let i = 1; i<=n; i++){
    sum+=i
    if(sum === n){
       return console.log('P')
    }else if(sum >= n){
       return  console.log('N')

    }
}