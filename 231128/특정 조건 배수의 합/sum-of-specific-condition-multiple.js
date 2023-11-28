const fs = require('fs')
const input= fs.readFileSync(0).toString().trim().split(' ')
const a = Number(input[0])
const b = Number(input[1])

let sum = 0;
if(a < b){
    for(let i = a; i<=b; i++){
        if(i % 5 === 0){
            sum +=i
        }
    }
}else{
     for(let i = b; i<=a; i++){
        if(i % 5 === 0){
            sum +=i
        }
    }
}

console.log(sum)