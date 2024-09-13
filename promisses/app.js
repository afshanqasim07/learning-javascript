// promisses

// promisse one
// we dont make promisses most of the time we just excecute it .
// we write async code in promisses
// making promisses
// promise one
// let myPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         let success = true; // Change this to false to simulate an error
//         if (success) {
//             resolve("Operation was successful!");
//         } else {
//             reject("Operation failed!");
//         }
//     }, 1000); // 1-second delay
// });


// let condpromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let condition = true
//         if (!condition) {
//             resolve ("the condition is true")
//         } else {
//             reject ("eror!please handle it your condition is false")
//         }
//     }, );
// })
// condpromise
//     .then((res) => {
//     console.log(res);
    
//     })
//     .catch((err) => {
//         console.log(err);
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


// let herpromiseone = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("hello this is my first promise")
//         resolve()
//     },3000)
// })
// herpromiseone
//     .then(() => {
//     console.log("the promise is done")
// })

// let datapromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({
//           username : 'afshanqasim07',
//           gender : 'female',
//           age : '19',
//           password : 'afshan',
//         })
//         reject("you got an error")
//     },2000)
// })
// datapromise
//     .then((res) => {
//         console.log(res)
//         return res.username
//     })
//     .then((username) => {
//         console.log(username)
//     })
    
    
//     .catch((err) => {
//      console.log("err")
//     })

// its not important to handle the promise by then and catch but we can also use async await for that instead of catch and this
// let thepromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         resolve("the work is successful");
//       } else {
//         reject("JS ERROR");
//       }
//     }, 1000);
//   });
  
//   async function handlepromise() {
//     try {
//       let response = await thepromise;
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   handlepromise()

//  api with then and catch and also with aysnc

// async function getusers() {
//     try {
//         let user = await fetch("https://jsonplaceholder.typicode.com/users")
//         console.log(user)
//         let data = await user.json()
//         console.log(data)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// getusers()

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resolve) => {
//     return resolve.json()
//     })
//     .then((data) => {
//     console.log(data)
//     })
//     .catch((error) => {
//        console.log(error)
//    })