const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')
const A_score = input[0].split(' ')
const B_score = input[1].split(' ')

const A_math = A_score[0] , A_eng = A_score[1]
const B_math = B_score[0] , B_eng = B_score[1]


//수학점수가 높은 사람 출력
if(A_math > B_math){
    console.log('A')
}else if(A_math === B_math && A_eng >B_eng){
    console.log('A')
}
else{
    console.log('B')
}