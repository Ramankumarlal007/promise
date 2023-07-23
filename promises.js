// //  Promise is a  object

// const promiseOne = new Promise( function (resolve, reject)  {
//  //Do an an async task
// // DB calls, cryptograph, network

// setTimeout(() => {
//     console.log(`Asunc task is completed.`);
//     resolve()
// }, 5000);

// })

// // promise need  to be consumed and below example,is given how it is consumed
// // .then has direct relation with the resolve
// // resolve is a method 


// promiseOne.then(function () {
//     console.log("PRomise is consumed.");
// })

// // next

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//        console.log(`Asunc task 2 is completed.`); 
//        resolve()
//     }, 2000);
// }).then( () => {
//     console.log(`Promise 2 completed`);
// })

// // third promise

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({userNAme: "Rishabh", email: "rishabh.com"})
//     }, 2000);
// })

// promiseThree.then((user) => {
//  console.log(user);
// } )



const promiseFour = new Promise((resolve, reject) => {
    let error = !false;

    if (error) {
        setTimeout(() => {
            resolve({userNAme: "Raman", password: "54897654"})
        }, 3000);
    } else {
       reject(`Error: sth went WRONG`) 
    }
   
})

// promiseFour.then(function (user) {
//     console.log(user);
// }).catch(function (x) {
// console.log(x);
// })


promiseFour.then(function (user) {
    console.log(user.password);
    return user.userNAme
}).then(function (yoo) {
    console.log(yoo);
}).catch((error) => {
console.log(error);
}).finally(function () {
    console.log("This promise is either resolved or rejected");
})


// async waits for sometime for the work to get finished or it throws error at that time  only. here catchisnot handled gracefully

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({userNAme: "Javascript", password: "1248gthh"})
//         } else {
//             reject ('Error : JS went wrong')
//         }
//     }, 1000);
   
// })


