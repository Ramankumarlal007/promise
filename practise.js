// const promiseFour = new Promise((resolve, reject) => {
//     let error = 2;

//     if (error == xz2) {
//         setTimeout(() => {
//             resolve({userNAme: "Raman", password: "54897654"})
//         }, 3000);
//     } else {
//        reject(`Error: sth went WRONG`) 
//     }
   
// })

// promiseFour.then(function (user) {
//     console.log(user.password);
//     return user.userNAme
// }).then(function (yoo) {
//     console.log(yoo);
// }).catch((error) => {
// console.log(error);
// }).finally(function () {
//     console.log("This promise is either resolved or rejected");
// })
   
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userNAme: "Javascript", password: "1248gthh"})
        } else {
            reject ('Error : JS went wrong')
        }
    }, 1000);
   
});

async function consumePromiseFive () {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive ()