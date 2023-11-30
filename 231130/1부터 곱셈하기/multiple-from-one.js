const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let prod = 1
for(let i = 1; i<=10; i++){
    prod *=i
    if(prod >= n){
        console.log(i)
        break
    }
}