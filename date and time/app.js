// date and times

let newdate = new Date("7 june 2023");
console.log(newdate.toLocaleString());
console.log(newdate.toDateString());
console.log(newdate.getDay());
console.log(newdate.getMonth());
console.log(newdate.getDate());
console.log(newdate.getFullYear());


// time coversations

let birthdate = new Date("7 june 2005")
let currentdate = new Date();

var birthdatetime = birthdate.getTime();
var currenttime = currentdate.getTime();
var remainingtime =(currenttime - birthdatetime);
console.log(remainingtime / 1000 / 60 / 60 / 24 / 365);



// time
let time = new Date();
console.log(time.toLocaleString());
console.log(time.getHours())
console.log(time.getMinutes());
console.log(time.getMilliseconds())
 