// objects


// console.log(herprofile);

// console.log(herprofile.number);
// console.log(herprofile["email"]);

// console.log(Object.keys(herprofile));
// console.log(Object.values(herprofile));
const herprofile = {
    name1: 'AFSHANQASIM',
    email2: 'afshanqasim23@gmail.com' ,
    number3: "021 12312311",
    address4 : 'karachi',
}
const hisprofile = {
    name: "Alifaisal ",
    email: 'alifaisal@gmail.com' ,
    number: "021 12312311",
    address : 'ISLAMBAD',
}
// object assign works when two objects have differnt keys so it will merge them
// const weare = Object.assign({}, hisprofile, herprofile);
// console.log(weare);
const us = { ...herprofile, ...hisprofile };
console.log(us);

const ()