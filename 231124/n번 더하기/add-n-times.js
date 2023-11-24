const fs=require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const n = Number(input[1])

let result = a
for(let i = 1; i <= n; i++){
   result += n
   console.log(result)
}