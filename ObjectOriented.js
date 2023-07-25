// Object Oriented programming

// object Literal

// const user = {
//     userName: "Raman",
//     loginCount: 9,
//     signedIn : true,

//     getUserDetals: function ()  {
//         console.log("got user datals from DB");
//         // console.log(this);
//         return this;
//     }

//     // console.log(this);
// }

// // console.log(user[`userName`]);
// let x = user.getUserDetals();
// console.log(x);
// console.log(this);


function User(username, loginCount, isLoggedIN) {
    this.username  = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

this.greeting = function () {
    console.log(`welcome ${this.username}`);
}

    return this;

}

const userOne = new User("raman", 4, true);

// const chai = new User("Rishabh", 14, false);

console.log(userOne.loginCount);

// console.log(chai);






















