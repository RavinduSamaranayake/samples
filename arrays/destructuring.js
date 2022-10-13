let nums = [5,7,2,4]
let [a,b,c,d] = nums
console.log(b)
console.log(d)

let [a1,b1,d1] = nums
console.log(d1);

let [a2,b2,,d2] = nums
console.log(d2);

let x = 5
let y = 6
console.log('----------------------swap 2 numbers-------------------------------');
[x,y] = [y,x]
console.log(x,'----',y);

console.log('-------------------------------with string array------------------------------------');
let words = "My Name is Kushan Ravindu".split(' ')
let [a4,b4,c4,d4] = words
console.log(a4 , d4)

let [a5,b5,, ...d5] = words
console.log(d5)


