console.log('................Initiated...........');
const value = new Promise((resolve,reject) => {
    setTimeout(() => {
        //exec
        resolve("Result");
    },4000);
});

// value.then((response) => console.log(response));

console.log('-------------solution to avoid the call back hell---------');
value
.then((response) => {
    console.log('1st then executed');
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('After the 1st then success..');
        },3000)
    }).then((response) => {
        console.log('2nd then executed.....');
        return response + '2nd then success';
    }).then((response) => console.log(response))
    .catch((error) => console.log('Error : ',error))
    .finally(() => {
        console.log('Done');
    });
})

//const response = await value; SyntaxError: await is only valid in async functions and the top level bodies of modules


async function doSomething() {
    try {
        const response = await value; //wait untill value is resolved
        console.log('async func executed. result is : ',response);
    } catch(exception){
        console.log(exception);
    } 
}
doSomething();

console.log('-------------Error handling---------');
// const value2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //exec
//         reject("This is the error");
//     },4000);
// });

// value2.then((response) => console.log(response))
//         .catch((error) => console.log('ERROR ',error));
