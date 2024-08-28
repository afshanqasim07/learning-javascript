// if else excersise

console.log("hello world ");

// Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

// solution
// let num = prompt("enter the number");
// if (num % 3 === 0) {
//     console.log("number is divisible by 3");
// }
// else {
//     console.log("number is not divisible by 3")
// }
  

// Write a program that checks whether the given input is an even
// number or an odd number
// let evenno = +prompt("enter the even number");
// if (evenno % 2 === 0) {
//     console.log("number is even");
// }
// else {
//     console.log("number is odd");
// }

// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young"


// let age = +prompt("enter your age")

// if (age >= 18) {
//     console.log("Old enough");
// }
// else {
//     console.log("too young");
// }

// Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, then given name is not correct

// let varname = "pareshay";
// let username = prompt("Enter the name");

// if (username === varname) {
//     alert("welcome back pareshay");
// }
// else {
//     console.log("given name is not correct");
// }

// . Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.


// let oddnum = +prompt("enter the number");

// if (oddnum % 3 === 0) {
//     console.log("Number is divisble by 3");
// } else {
//     console.log("number is not divisble by 3");
// }

// Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)



// Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements
// let time = +prompt("enter the time in format of 24 hours");
// if (time>0 && time<=10) {
//     console.log("GOOD MORNING");
// } else if (time>10 && time <=14) {
//     console.log("GOOD AFTERNON");
// } else if (time >14 && time<=19) {
//     console.log("good evening");
// }
// else {
//     console.log("Good night");
// }


// Here’s a JavaScript program that creates a basic calculator using if-else statements. The program will take two numbers and an operator (+, -, *, /, %) as input and will calculate the result accordingly:

// let num1 = +prompt("enter the first number");
// let num2 = +prompt("enter the second number");

// let sign = prompt("enter the operator sign what to perform");

// if (sign === "+") {
//     console.log(num1 + num2);
// } else if (sign === "-") {
//     console.log(num1 - num2);
// } else if (sign === "*") {
//     console.log(num1 * num2);
// } else if (sign === "/") {
//     console.log(num1 / num2);
// } else {
//     console.log(num1 % num2)
// }

// . Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise;

// solution

// let password = "tumheqbtao";

// let userpassword = prompt("enter your password");

// if (userpassword===password) {
//     console.log("Correct! The password you entered matches the orignal password");
// } else {
//     console.log("incorrect password ! try again");
// }

// Write a program that adds an else statement to the following
// script to display “You are not Fahad”


// var firstname = "fahad";
// var username = prompt("enter your first name")


// if (username === firstname) {
//     console.log("Hello fahad");
// } else {
//     console.log("You are not Fahad");
// }

// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var int1 = +prompt("enter integer 1");
// var int2 = +prompt("ENTER integer 2");

// if (int1 > int2) {
//     console.log(int1 + "integer 1 is greater then interger2");
// } else if (int2 > int1) {
//     console.log(int2 + "integer 2 is greater then integer1");
// } else if (int1 === int2) {
//     console.log("integer1 and 2 are equal");
// }

// Write a program that takes input a number from user & state whether the number is positive, negative or zero

// var num = +prompt("enter the number");

// if (num > 0) {
//     console.log("Number is positive");
// } else if (num < 0) {
//     console.log("number is negative");
// } else if (num === 0) {
//     console.log("number is equal to zero");
// }

// Ask the user what the current hour is. If the hour is between 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If the hour is between 5 and 8 p.m., tell the user, "It's dinner time." For any other hours, tell the user, "Sorry, you'll have to wait, or go get a snack." (Hint: Store the hour in 24 hours clock format i.e. 14 for 2pm , 15 for 3pm)


// let time = +prompt("enter the time hour");

// if (time > 6 && time <= 9) {
//     console.log("Breakfast is served.");
// } else if (time > 11 && time <= 13) {
//     console.log("Time for lunch.");
// } else if (time > 18 && time <= 21) {
//     console.log("It's dinner time.");
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }


// 