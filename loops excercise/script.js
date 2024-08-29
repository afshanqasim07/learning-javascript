// loops excercise

// question one
// 1. Write a program to display the message “Hello World” 5 times in your browser using for loop.
// solution
// for (let i = 0; i < 5; i++){
//     console.log("hello world");
// }
// question two
// Write a program to print numeric counting from 1 to 10.
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
// question no 3
// solution
// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// let num = Number(prompt("enter the number"));
// let length = +prompt("enter the length");

// for (let i = 1; i <= length; i++){
//     console.log(`${num} * ${i} is = ${num * i}`);
// }

// question no 3
// You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]Write each element on new line with the help of for loop
// solution
// let phones = ["nokia", "samsung", "apple ", "sony ", "Huawei"]
// for (let i = 0; i < phones.length; i++){
//     console.log(phones[i]);
// }
// for (const device of phones) {
//     console.log(device);
// }
// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (let i = 0; i < fruits.length; i++){
//     console.log(` element at ${i} is ${fruits[i]}`);
// }
// for (const name of fruits) {
//     console.log(name);

// }
// question
// Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user

// let numbers = +prompt("enter the number");
// let arr = [];
// console.log(`number of items : ${numbers} items`)
// for (let i = 0; i < numbers; i++){
//     let items = (prompt("enter the values"));
//     arr.push(items[i]);
//     console.log(items)
// }
// question
// . You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not. Example:

// let bakeryitems = ["cake", "apple pie", "cookie", "chips", "patties"];
// let item= prompt("enter the item you want");
// for (i = 0; i < bakeryitems.length; i++){
//     if (item === bakeryitems[i]) {
//         console.log(`${item} found in the list`)
//         break
//     } else {
//         console.log(` we are sorry ${item} is not available in our bakery`);
//     }
// }
// Write a program to print multiples of 5 ranging 1 to 100
// let num = 5;
// let length = 20;

// for (i = 1; i <= length; i++){
//     console.log(`${num} * ${i} is = ${num * i}`);
// }

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").

// for (i = 0; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }
// generate the even odd backword forward series
// let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// for (const numbers of counting) {
//     console.log(numbers);
// }
// let reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//  for (const counting of reverse) {
//      console.log(counting);
// }
// for (let i = 0; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// for (let i = 1; i <= 19; i++){
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }
// for (let i = 2; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(`${i}k`)
//     }
// }
// have to check again that how you can find ans of 105
// q18 ;Write a program to calculate the product of the odd integers from 1 to 7
// let product = 1;
// for (let i = 1; i <= 7; i++){
//     if (i % 2 !== 0) {
//        let multiply = product*i
//         console.log(`the product of odd integer from 1 to 7  ${product*i} is ${multiply}`)
//     }
// }

// loop remaing questions q19 / 20/18/16/15/14/11/10/9
// question 9 ;
// . Write a program to identify the largest number in the given array
// A = [24, 53, 78, 91, 12]
