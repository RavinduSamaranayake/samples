let student = {
    name : 'Kushan',
    tech : 'Java',
    laptop : {
        cpu : 'i5',
        ram : 16,
        brand : 'Dell', 
        hdd: '1TB'
    }
}
console.log(student)
console.log(student.laptop)
console.log(student.laptop.brand)
console.log(student.laptop.brand.length)

console.log(student.laptop.hdd1)
//console.log(student.laptop.hdd1.length) TypeError: Cannot read properties of undefined (reading 'length')
console.log('-----------------to avoid above error we have to validate fields using ? operators, this is same as if condition-------------')
console.log(student.laptop.hdd1?.length)
console.log(student.laptop.hdd?.length)
console.log(student.laptop.hdd?.length)
console.log(student.laptop1?.hdd.length)

console.log('-----------Delete Properties------------------------')
delete student.laptop.hdd
console.log(student)

console.log('-----------Print Key Values in object----------------')
for(let key in student){
    console.log(key, student[key])
}
for(let key in student.laptop){
    console.log(key, student.laptop[key])
}
 