const value = new Promise((resolve,reject) => {
    setTimeout(() => {
        //exec
        resolve("Promise Result is..");
    },4000);
});

(() => {
    const val = value;
    console.log('Immediatly Invoked function(IIF)........',val);
})();

// console.log('Async function handle in IIF')

(async () => {
    const response1 = await value; //wait untill value is resolved
    console.log('async func executed in IIF function. result is : ',response1);
})();


(async () => {
    console.log('-----------Async functions same as promisses then chain-----------------')
    const response = await value; //wait untill value is resolved
    console.log('result1 is : ',response);

    const response2 = await value + ' 2nd res';
    console.log('result2 is : ',response2);

    const response3 = await value + ' 3rd res';
    console.log('result3 is : ',response3);

    const response4 = await value + ' 4th res';
    console.log('result4 is : ',response4);


    console.log('async func result is completed : ',response);
})();



