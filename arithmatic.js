console.log(".................post increment..............")
let x = 4
let num = x++
console.log(num,x)
console.log(num,x)

console.log(".................pre increment..............")
let y = 4
let nump = ++y
console.log(nump,y)


console.log("..................other operartors...........")

let p = "Pen"
let b = "Book"

let data = p > b // comparing each characters using ASCII values
console.log(data);

let p1 = "Pencil"
console.log(p > p1)

let n1 = "3"
let n2 = 4
console.log(n1 > n2) 

console.log("...............Equals Operator....................")

let a1 = 3
let b1 = 3
let data1 = a1 = b1 //Assignment Operator
console.log(data1)

let data2 = a1 == b1//Equality Operator
console.log(data2)

let b2 = "3"
let data3 = a1 == b2
console.log(data3)

console.log("...............Strict Equality Operator....................")
//never use == always use ===
let data4 = a1 === b2 //compare with type also
console.log(data4)

console.log(".................Logical Operators.................")

let v1 = 7, v2 = 16, v3 = 20

let result = v1 < v2 || v1 < v3
let nr = !result
console.log(result,nr)
