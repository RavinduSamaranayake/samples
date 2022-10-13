let num = 123
console.log(num,typeof num)

let num1 = "123"
console.log(num1,typeof num1)

let num2 = Number("123")
console.log(num2,typeof num2)

//type coercion
let x
console.log(x,typeof x)
x=8
console.log(x,typeof x)
x=x + ""
console.log(x,typeof x)
x= x-2
console.log(x,typeof x)
x= !x
console.log(x,typeof x)
x=x+8
console.log(x,typeof x)

console.log(Boolean(6)) //true
// console.log(Boolean(kushan)) ReferenceError: kushan is not defined
console.log(Boolean("kushan")) //true
console.log(Boolean(undefined))//false
console.log(Boolean(0)) //false

console.log("......................................................unary operators...................................................")
let a = 8
console.log(a,typeof a)
a = a + ""
console.log(a,typeof a)
a = a + 2
console.log(a,typeof a)
a = +a + 2 //unary here
console.log(a,typeof a)

console.log("......................................................parse...................................................")
let b = Number("123 Kushan")
console.log(b)
b = parseInt("123 Kushan")
console.log(b)



