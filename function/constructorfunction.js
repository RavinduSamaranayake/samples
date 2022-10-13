function Student(name,tech){
    this.name = name
    this.tech = tech

    this.getdetail = function(){
        console.log(this.name,' - ',this.tech)
    }
}

let student1 = new Student('Kushan','Java')
let student2 = new Student('Ravindu','JS')

console.log(student1)
student2.getdetail()

student2.tech = 'Scala'
student2.getdetail()