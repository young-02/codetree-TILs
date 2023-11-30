const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let result = 0;
for(let i = 1; i <= n; i++){
    if(i %2 ===0 || i % 3=== 0|| i%5===0){
        continue
    }

    result++
}
console.log(result)