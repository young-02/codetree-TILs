const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

// let A = 0, B = 0, C = 0, D = 0

// for(let i = 0; i< input.length; i++){
//      const arr = input[i].split(' ')
//      const cold = arr[0]
//      const  temp = Number(arr[1])
     
//     if(cold === 'Y' && temp >= 37){
//         A++
//     }else if(cold === 'N' && temp >= 37){
//         B++
//     }else if(cold === 'Y' && temp <= 37){
//         C++
//     }else{
//         D++
//     }
   
// }

// if(A >= 2){
//         console.log('E')
//     }else{
//    console.log('N')
// }


const a = input[0].split(' ')
const b = input[1].split(' ')
const c = input[2].split(' ')

const a_state = a[0] ,a_temp = Number(a[1])
const b_state = b[0] ,b_temp = Number(b[1])
const c_state = a[0] ,c_temp = Number(c[1])

if(a_state === "Y" && a_temp >= 37){
    if(b_state === "Y" && b_temp >= 37 || c_state === 'Y' && c_temp >= 37 ){
        console.log('E')
    }else{
        console.log('N')
    }
}else{
    console.log('N')
}