const fs = require('fs')
let n = Number(fs.readFileSync(0).toString())


let idx = 1;

while(n >= idx){
    if(n %  idx === 0){
         idx++
        //  console.log(idx)
         if( idx >=2){
            console.log('C')
            break
         }
    }else{
        console.log('N')
        break;
    }
    
}