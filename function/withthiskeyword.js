let laptop =  {
    cpu : 'i5',
    ram : 16,
    brand : 'Dell', 
    
    greeting : (type) => console.log(`Helloo I'm a ${type} Laptop..!!`),

    configure : function() {
        console.log('cpu is - ',this.cpu)
        console.log('brand is - ',this.brand)
    },

    compare : function(other){
        if(other.cpu > this.cpu)
            console.log(other)
        else
            console.log(this)
    } 
}
laptop.greeting('DELL')
laptop.greeting('HP')
laptop.configure()

let laptop1 =  {
    cpu : 'i7',
    ram : 16,
    brand : 'Dell', 
    
    greeting : (type) => console.log(`Helloo I'm a ${type} Laptop..!!`),

    configure : function() {
        console.log('cpu is - ',this.cpu)
        console.log('brand is - ',this.brand)
    }
}
console.log('..................compare function works.............')
laptop.compare(laptop1)