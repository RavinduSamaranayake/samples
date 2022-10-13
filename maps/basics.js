let map = new Map()
map.set('Kushan',123)
map.set('Ravindu',345)
map.set('Sam','Hellow')
map.set('Kushan',246)

console.log(map.keys());
console.log(map.get('Kushan'));
console.log(map.has("Sam"));

console.log('--------------------Print all values------------------');
for(let [k,v] of map){
    console.log(k," : ",v);
}
console.log('--------------not working like this------------------------');
for(let key in map){
    console.log(map.get(key));
}
console.log('-------------for each---------------------------------');
map.forEach((k,v)=> console.log(k, " - ",v))//need to change seq like v,k => (value,index/key)
console.log('------------------------------------------------------');
map.forEach((v,k)=> console.log(k, " - ",v))