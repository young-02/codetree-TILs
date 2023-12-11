const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

// let i = 0
// let result = n
// while(result >= 1){
//     i++
//     result = parseInt(result/i)
// }
// console.log(i)

let result = n
let count = 0
for(let i = 1; i<=n; i++){
  result = parseInt(result/i)
  count++
   if(result <= 1){
    break
 }
}
  console.log(count)