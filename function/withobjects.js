let laptop =  {
    cpu : 'i5',
    ram : 16,
    brand : 'Dell', 
    
    greeting : (brand) => console.log(`Helloo I'm a ${brand} Laptop..!!`)
}
laptop.greeting('DELL')
laptop.greeting('HP')