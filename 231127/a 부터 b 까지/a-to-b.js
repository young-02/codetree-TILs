const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])

let result = ''
let num = 0
for(let i = a; i<=b; i++){

    if(i === a){
        num = i
        result += num + ' '
    }
  if(num % 2 === 0 ){
     num = num+ 3 
     if(num <=13){
     result += num + ' '
     }
    
  }else if(num % 2 === 1 && num <=13){
    num = num*2
       if(num <=13){
     result += num + ' '
     }
    
  }
  

}

console.log(result)