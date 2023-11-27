const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

let result = ""
for(let i = 1; i <= n; i++){
    if( i % 3 === 0 || i % 10 === 3 || i % 10 === 6 || i% 10 === 9){
        result += 0 +' '
    }else{
        result += i + ' '
    }
}
console.log(result)