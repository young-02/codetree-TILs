const fs = require('fs')
let n = Number(fs.readFileSync(0).toString())


let idx = 1;

while(n >= idx){
    if(n %  idx === 0){
         idx++
         if( idx >=3){
            console.log('C')
            break
         }
    }else{
        console.log('N')
        break;
    }
    
}