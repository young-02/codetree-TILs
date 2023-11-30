const fs = require('fs')
const input = fs.readFileSync(0).toString()
const a = Number(input)

for(let i = 1;  i<= a; i++){
    if(i % 2 === 0 && i%4 !== 0 && (parseInt(i/8) === (i%2 === 0)) && (i%7).toFixed(0) <= 4){
        console.log(i, 1)
    }
   else{
        console.log(i, 0)
    }
}