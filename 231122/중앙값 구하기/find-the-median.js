const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

if(a >= b && a >=c){
   if(b >= c){
     console.log(b)
   }else{
    console.log(c)
   }
}else if( b >= c && b >= a){
    
    if(a >= c){
        console.log(a)
    }else{
        console.log(c)
    }
}else{
    if(b >= a ){
        console.log(b)
    }else{
        console.log(a)
    }
}