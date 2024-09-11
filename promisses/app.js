// promisses

// promisse one
// we dont make promisses most of the time we just excecute it .
// making promisses
// promise one
// let myPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation using setTimeout
//     setTimeout(() => {
//         let success = true; // Change this to false to simulate an error
//         if (success) {
//             resolve("Operation was successful!");
//         } else {
//             reject("Operation failed!");
//         }
//     }, 1000); // 1-second delay
// });
// myPromise
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

// let agepromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let age = 15;
//         if (age >= 18) {
//     resolve("You can drive")
//         } else {
//             reject("sorry you are under age you cant drive")
//  }
//     },2000)
// })
// agepromise
//     .then((res) => {
//     console.log(res)
//     })
//     .catch((err)=>{
//     console.log(err)
// })