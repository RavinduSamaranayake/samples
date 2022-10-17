console.log('.....................base level..............................');
const testFuncBase = (number,callback1,callback2) => {
    console.log('before calculate this logic need to execute some business logics.. thats why we used call back');
    number++
    console.log('logic execute completed now going to execute call backs');
    if(number%2!=0)
        callback1(number)
    else
        callback2(number)    
}

const func1 = (num) =>{
    console.log('it is odd number..',num);
} 
const func2 = (num) =>{
    console.log('it is even number..',num);
} 

testFuncBase(12,func1,func2)

console.log('---------------end base----------------------');





console.log('---------------why call backs------------------');

const testWrongFunc = (number) => {
    console.log('---init wrong func----');
    setTimeout(() => {
        console.log('-----timed out-----');
        return number+1;  // here we retuned value but it is in timeOut not returrned from function
    },2000)
    return 'for the output we have to wait until to timeout complete, and we cant use this type of simple returns here'
}
console.log('.....end of the wrong func........');
const out = testWrongFunc(13);
console.log('out is : ',out);

console.log('----------------correct way--------------------------------');
const correctFunc = (number,callbackfun) => {
    console.log('---init correct func----');
    setTimeout(() => {
        console.log('-----timed out-----');
        callbackfun(number)  
    },2000)
    console.log('.....end of the correct func........');
} 
correctFunc(13,(number) => {console.log('correct out is : ',number+1)});

console.log('-----------------callback hell-------------------------------');

function doSomething(number,callback){
    setTimeout(() => {
        callback();
    },2000);
}

function doSomething2(number,callback){
    setTimeout(() => {
        callback();
    },2000);
}

function doSomething3(number,callback){
    setTimeout(() => {
        callback();
    },2000);
}

// execute doSomething 1,2,3 consecutively  
doSomething(13,function(){
    var value1 = 2;
    console.log('.......execute some business logic in dosomething.....');
    doSomething2(value1,function(){
       var value2 = 2;
       console.log('.......execute some business logic in dosomething2.....');
       doSomething3(value2,function(){
          var value2 = 2;
          console.log('.......execute some business logic in dosomething3.....');
          console.log('.......end of dosomething3....'); 
        })
       console.log('.......end of dosomething2....');    
    })
console.log('.......end of dosomething....');
})




