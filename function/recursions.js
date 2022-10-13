// let num = 1
// function show(){
//     console.log('Hi ', num);
//     num++
//     if(num < 10000) //to avoid the stackoverflow error
//         show()
// }
// show()
let val = 1
function factorial(num){
    if(num > 0){
        return num*factorial(num-1)
    }else{
        return 1;
    }
}

//factorial(5) = 5*factorial(4)
console.log(factorial(100));