let add = (num1,num2) => num1 + (num2 < 0 ? -1*num2  : num2)
console.log(add(6,-10))
console.log(add(6,10))
console.log(add(6,-5))