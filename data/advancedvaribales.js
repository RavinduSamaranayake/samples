console.log('------------------------Hoisting----------------------')
function greet(u,c){ //u is a Local variable
    let num = 5
    console.log('in function num :',num)
    return `Hello ${user} for ${company}`
}

let user = 'Kushan R' // Global Variable
let company = 'Creative S'
let str = greet(user,company);
console.log(str)
//console.log('in outside num :',num) //ReferenceError: num is not defined (not a global variable)
