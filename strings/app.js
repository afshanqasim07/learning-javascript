// strings

// let username = "afshanqasim";
let password = 'afshii';

// console.log(username.length);

console.log(password[2]);

let pencil = {
    item : "pencil",
    price: 20,
}
// we use object name to acess the things in set.
console.log(`the price of ${pencil.item} is ${pencil.price} rupees`);


// strings methods

// uppercase method

let myname = " Afshan";

console.log(myname.toUpperCase());


// lowercase method
let hername = "ESHA";

console.log(hername.toLowerCase());


// trim

let birthdate = "    05 june 2005        "
console.log(birthdate)


console.log(birthdate.trim());


// slice we give it start and end index

let pen = "bluepen";
console.log(pen.slice(2, 6));


// concat

let firstname = "afshan";
let lastname = "qasim";

let girlname = firstname.concat(lastname);
console.log(girlname);

// replace


let word = "hello";

console.log(word.replace("lo", "p"));
console.log(word.charAt(2));



// practice question

let fullname = prompt("enter your username");


let username = "@" + fullname + fullname.length;
console.log(username);