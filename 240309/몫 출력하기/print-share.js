const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let idx = 0;
let cnt = 0

while(true){
    let n = Number(input[idx])
    idx++
    let result = n
    if(n % 2 === 0){
        result = parseInt(n/2)
        cnt++
    }else{
        continue;
    }
    console.log(result)
    if(cnt >=3 ){
      break
    }
}