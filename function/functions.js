function greet(user,company){
    return `Hello ${user} for ${company}`
}
let str = greet('Kushan','Creative');
console.log(str)

console.log('----------------------------Anonymous functions with expressions------------------------')

let add = function(num1,num2){
                return num1+num2
          }
let result = add(5,6)
console.log(result)

let sum = add
let result2 = sum(10,6)
console.log(result2)
console.log(sum)