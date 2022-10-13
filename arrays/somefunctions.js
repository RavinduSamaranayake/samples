let nums = [42,51,28,64,12,15]
nums.forEach((n,i,nums) => console.log(i , n , nums))

console.log('------print only even numbers by *2----------------')
nums.filter(n => n%2===0)
.map(n => n*2)
.forEach(n=>console.log(n))

console.log('------------------------reduce to one value-----------')
let value = nums.filter(n => n%2===0)
                .map(n => n*2)
                .reduce((a,b) => a+b)
console.log(value)                