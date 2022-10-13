let values = [1,2,4,5,3,7]
console.log(values)
values.push(9)
console.log('return value of length array when push : ',values.push(11))
console.log(values)
console.log('delete and return last value of array when pop : ',values.pop())
console.log(values)
console.log('delete and return first value of array when shift : ',values.shift())
console.log(values)
console.log('add first value and return length of array when unshift : ',values.unshift(50))
console.log(values)
console.log('remove values splice(index,no of values you want to remove) : ',values.splice(1,3))
console.log(values)
console.log('remove values and add instead : ',values.splice(1,1,34,"kushan"))
console.log(values)

console.log('---------------------------with constructor def-----------------------------')
let values2 = new Array()
values2.push(6,7)
values2[2] = 9
values2[4] = 91
console.log(values2)
console.log(values2[3])

console.log('---------------------------with functions and objects-----------------------------')
let values3 = [1,'kushan',{name:'java'},()=>console.log("Greetings.....................")]
console.log(values3[2])
values3[3]()