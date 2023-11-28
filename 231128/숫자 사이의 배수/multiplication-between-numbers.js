const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')
const a = Number(input[0])
const b = Number(input[1])

let sum = 0
let num = 0
let avg
for(let i = a; i<=b; i++){
  if(i % 5 === 0 || i % 7 === 0){
    sum+=i
    num++
  }
    avg = sum/num
}
console.log(sum,avg.toFixed(1))