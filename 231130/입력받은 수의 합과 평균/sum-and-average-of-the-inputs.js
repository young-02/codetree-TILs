const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')
    const n = Number(input[0])

let sum = 0
for(let i = 1; i<=n; i++){
    const num = Number(input[i])
    sum += num 
}
console.log(sum, (sum/n).toFixed(1))