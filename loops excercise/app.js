// loop practice questions .


// Write a program to display the message “Hello World” 5 times in your browser using for loop

// for (i = 0; i < 5; i++){
//     console.log("hello world");
// }

// 2. Write a program to print numeric counting from 1 to 10.


// let j = 0;
// while (j < 10){
//     j++;
//     console.log(j);
// }

// 3. Write a program to print multiplication table of any numbern using for loop. Table number & length should be taken as an input from user


let number = prompt("Enter the number");
let length = prompt("enter the length");

for (let i = 1; i <= length; i++){
    console.log(number, "*", i, "=", number * i);
}