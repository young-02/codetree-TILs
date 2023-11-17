const fs =require("fs")
const input = fs.readFileSync(0).toString().split(' ')
const tall = Number(input[0])
const weight = Number(input[1])

// 키 cm -> m 으로 변환 => 제곱
const miter = (tall/100)** 2
const bmi = parseInt(weight/miter)


if(bmi >= 25){
    console.log(bmi)
    console.log('Obesity')
}else{
    console.log(bmi)
}