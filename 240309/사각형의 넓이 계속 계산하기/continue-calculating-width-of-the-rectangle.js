const fs = require('fs')
let input =  fs.readFileSync(0).toString().trim().split('\n')
let idx = 0



while(true){
    let arr =  input[idx].split(" ")
    let x = Number(arr[0])
    let y = Number(arr[1])
    let C  = arr[2]
    idx++
    console.log(x*y)
   if( C === 'C'){
    break
   }
}