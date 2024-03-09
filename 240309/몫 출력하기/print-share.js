const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let idx = 0;

while(true){
    let n = Number(input[idx])
    idx++
    
    if(n % 2 === 0){
        console.log(n/2)
    }else{
        continue;
    }
    if(idx > 4){
      break
    }
}