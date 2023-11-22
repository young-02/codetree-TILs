const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

let A = 0, B = 0, C = 0, D = 0

for(let i = 0; i< input.length; i++){
     const arr = input[i].split(' ')
     const cold = arr[0]
     const  temp = Number(arr[1])
     
    if(cold === 'Y' && temp >= 37){
        A++
    }else if(cold === 'N' && temp >= 37){
        B++
    }else if(cold === 'Y' && temp <= 37){
        C++
    }else{
        D++
    }
   
}

if(A >= 2){
        console.log('E')
    }else{
   console.log('N')
}