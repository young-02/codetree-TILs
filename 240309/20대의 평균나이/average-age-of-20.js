const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n')

let idx = 0
let av = 0
let cnt = 0

while(true){
    let n = Number(input[idx])
    idx++
    if(n >=30){
        break
    }else{
      cnt++
      av +=n

    }

}
let answer = av/cnt
console.log(answer.toFixed(2))