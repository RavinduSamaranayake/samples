let data = 8 //Number
let user = "Kushan" //String
let num1 = 5/0
console.log(num1)
console.log(Number.MAX_VALUE)
console.log(Number.MAX_VALUE*10)
console.log(Number.MIN_VALUE/10)
let num2 = 11111111111111111111111111111111111111100000000000000000000000001223
console.log(num2)

//Big Ints
let num3 = 11111111111111111111111111111111111111100000000000000000000000001223n
console.log(num3)
//console.log(num3 + 2) //TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(num3 + 2n)

//Strings

let user1 = "Kushan"
let user2 = "Ravindu"

console.log(user1+" "+user2)

let user3 = 'Kushan "Samaranayake"'
let user4 = "Kushan 'Samaranayake'"
console.log(user3)
console.log(user4)

//using escape character
let user5 = "Kushan \"Samaranayake\""
console.log(user5)
let user6 = "Kushan \nRavindu"
console.log(user6)
let user7 = "Ku\tshan\tRavi\bndu"
console.log(user7)

//boolean
let bool = 5 > 6
console.log(bool);
console.log(typeof  bool);

