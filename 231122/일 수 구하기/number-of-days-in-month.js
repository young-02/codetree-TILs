const fs = require('fs')
const input = fs.readFileSync(0).toString()

const month = Number(input)



if(month === 2){
    console.log(28)
// 7월 이하 홀수 이거나 7월이상 짝수 일경우
}else if((month <= 7 && month %2 === 1) || (month >= 7 && month %2 === 0)){
    console.log(31)
}else{
    console.log(30)
}