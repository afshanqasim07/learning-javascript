// conditional statement 

// question 1

// get user to input a number using prompt check if the number is multiple of 5 or not ?
let num = prompt("enter the number");
console.log(num)
if (num % 5 ===0){
    console.log("its a multiple of 5");
}
else{
    console.log("its not a multiple of 5");
}
// question 2
// write a code which can give grades to student according to their scores
// 90 to 100 will be A ,  70 to 89 will be B , 60 to 69 will be C , 50 to 59 will be D , 49 to 0 will be F

let marks = prompt("enter your marks");
console.log(marks);
 

if (marks>=90 && marks <=100){
    console.log("you got A ");
}
else if (marks >=70 && marks <=89){
    console.log("you got B ");
}
else if (marks >=60 && marks <=69){
    console.log("you got C ");
}
else if (marks >=50 && marks <=59){
    console.log("you got D ");
}
else {
    console.log("you are fail ,better luck next time");
}
