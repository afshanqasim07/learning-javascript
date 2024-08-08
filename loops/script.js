// loops

// repeat the code again and again

// for loop

for (let i = 0;i <5;i++) {
    console.log("loop is working");
}

let sum = 0;

for (let num =1;num<=10;num++ ){
    sum = sum +num; 
    
}
console.log(sum);

let age= 0;
while (age<18){
    console.log("you can drive")
    age++;
}

let i = 0;
do {
    console.log("afshanqasim");
    i++;
}while (i<=20)



    // practice questions

    // print all even numbers from 0 to 100 

for (i = 0 ; i<=100 ;i++){
    if (i%2 ===0){
        console.log(i);
    }
}

  let j = 3;

  while (j<=99){
    if (j%3===0){
        console.log(j);
        
    }
    j++;
  }
// create game where user will guess the correct game no ask user to keep guesing untill the user guess the right number

let gamenum = 20;

let usernum = prompt+("Guess the game number");
console.log(usernum);

while (gamenum!== usernum){
    let usernum = prompt+("you guess the wrong number, guess the right number");
}
console.log("congratulations you guess the right number");