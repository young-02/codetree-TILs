const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')
const a = input[0].split(' ')
const b = input[1].split(' ')

const a_age = a[0], a_gender =a[1]
const b_age = b[0], b_gender = b[1]

//19세 이상 이면서 남자
if(a_age >= 19 && a_gender === "M" || b_age >= 19 && b_gender === "M"){
    console.log(1)
}else{
    console.log(0)
}