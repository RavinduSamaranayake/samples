let book = {}
console.log(book,typeof book)

let student = {
    name : 'Kushan',
    tech : 'Java',
    'work exp' : 3
}
console.log(student)
console.log(student.name)
console.log(student['name'])
console.log(student["work exp"])//we can't use . operator here

let techInput = 'tech'
console.log(student.techInput)
console.log(student[techInput])

