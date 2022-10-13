//set is only ordered in java script not in other languages
let values = new Set('Helloowww')
console.log(values);

console.log('-----print set values-------');
let nums = new Set()
nums.add(1)
nums.add(3)
nums.add(11)
nums.add(3)
nums.add(5)
nums.add('Hellooo')
nums.add(1)

for(let val of nums){
    console.log(val);
}
// for(let key in nums){
//     console.log(key);
// }
console.log('---foreach---');
nums.forEach(n => console.log(n))
nums.forEach((n,i) => console.log(n,i))// set hasn't indexes

console.log(nums.has(3))
