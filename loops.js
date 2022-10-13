console.log("----------------While Loop--------------")
let i = 1
while(i <= 5)
{
    console.log("Hi",i)
    i++
}
console.log("----------------For Loop--------------")
for(let i = 1;i<=5;i++){
    console.log("Hi",i)
}

console.log("----------------Challange-------------need to print 1 by 1 values in this number")
let num = 123456 
while(num >= 1){
    console.log(num % 10)
    num = parseInt(num / 10)
}
