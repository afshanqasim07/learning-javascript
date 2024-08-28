// loops

// repeat the code again and again

// for loop

// for (let j = 0;j <5;j++) {
//     console.log("loop is working");
// }

// let sum = 0;

// for (let num =1;num<=10;num++ ){
//     sum = sum +num;
    
// }
// console.log(sum);

// let age= 0;
// while (age<18){
//     console.log("you can drive")
//     age++;
// }

// let j = 0;
// do {
//     console.log("afshanqasim");
//     j++;
// }while (j<=20)



//     // practice questions

//     // print all even numbers from 0 to 100

// for (j = 0 ; j<=100 ;j++){
//     if (j%2 ===0){
//         console.log(j);
//     }
// }

//   let j = 3;

//   while (j<=99){
//     if (j%3===0){
//         console.log(j);
        
//     }
//     j++;
//   }
// // create game where user will guess the correct game no ask user to keep guesing untill the user guess the right number

// let gamenum = 20;


// let usernum = prompt("enter the number");

// while (gamenum != usernum) {
// usernum = prompt("guess the correct game number");
// }

// console.log("congratulations you guess the right number");

//  for loops
// for (j = 0; j <= 10; j++){
//     console.log(j);
// }

// nested loop
// for (i = 0; i <= 10; i++){
//     console.log("outer loop" , i)
//     for (j = 0; j <= 10; j++){
//     console.log( "inner loop " ,j);
// }
// }

// for (i = 0; i <= 30; i++){
//     console.log('this is number', i);
//     }

let i = 0;
// while (i <= 30) {
//     console.log(`this number is = to ${i}`);
//     i++;
// }

// do {
//     console.log(`this number is ${i}`);
//     i++;
// } while (i <=10)

// array of loop
// we use for pf to apply simple loop on array
// let fruits = ["apple", "mango", "banana ", "kiwi"]

// for (const name of fruits) {
//     console.log(name);
// }
// let username = ["afshanqasim"]
// for (const val of username) {
//     console.log(username)
// }

// for in loop
// we use this loop on objectPosition: 
// const herprofile = {
//     username: "afshanqasim07",
//     followers: 50000,
//     following: 50,
//      isfollowedbyme : true,
// }
 
// for (const profile in herprofile) {
//     console.log(`${profile} of the values are ${herprofile[profile]}` );
// }

// for each loop
// we use callback function in this in contains item as parameter if you have name of that and you want to excecute it somewhere else just give it refrence eith name where you want
let languages = ['javascript', 'java', 'python', 'ruby', 'C#']

// they also have index and array we can give it as parameneter 

languages.forEach((item, index) => {
    console.log(item ,index);
});

// for each for  object in array
const herprofile = [
    {
        username: "afshanqasim07",
        followers: 50000,
        following: 50,
         isfollowedbyme : true,
    } ,
    {
        username: "alishaqasim08",
        followers: 40000,
        following: 40,
         isfollowedbyme : true,
    } ,
    {
        username: "eshalali",
        followers: 30000,
        following: 30,
         isfollowedbyme : false,
    }
]
herprofile.forEach((item)=>{
    console.log(`the username is ${item.username}`);
    // console.log(item.following);
    // console.log(item.followers);
    // console.log(item.isfollowedbyme);
})
