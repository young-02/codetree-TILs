const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')



let sum = 0
let avg = 0
for(let i = 0; i <input.length; i++){
    let num = Number(input[i])
    if(input[i] > 0 && input[i] <= 200){
        sum += num
        avg++
    }
}
console.log(sum,(sum/avg).toFixed(1))