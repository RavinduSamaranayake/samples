console.log(".................let keyword....................")
let num;
num = 7
console.log(num, typeof num);
//let num = 8 //can't declare this
console.log(num);
console.log(".................var keyword....................")
var num1;
num1 = 71
console.log(num1, typeof num);
var num1 = 81
console.log(num1);
console.log(".................const keyword....................")
const numc = 28;
//numc = 71 //can't declare this
console.log(numc, typeof num);
//var numc = 81 //can't declare this
console.log(numc);

console.log(".................with functions....................")
// program to print the text
// variable a cannot be used here
function greet() {
    let a = 'hello';

    // variable b cannot be used here
    let b = 'Worldd';
    if(a == 'hello'){
        // variable b can be used here
        let b = 'world';
        console.log(a + ' ' + b);
    }

     // variable b cannot be used here
    console.log(a + ' ' + b); // error
}
// variable a cannot be used here

greet();
