const question1 = ((5>20) && (5<2)) //false&&false=false
const question2 = ((5===5) || (5==="5")) //true||false=true
const question3 = !(20 > 50) //!false=true
const question4 = !((20>50) && (50>60)) //!(false&&false)=!false=true

console.log(question1, question2, question3, question4)
//false true true true