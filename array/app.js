// array and its method


let arr = [10, 20, 30, 40, 50]
console.log(arr);

console.log(arr[2]);

// changing any array value
arr[0] = 5;
console.log(arr);


// let fruits = ["mango", "bnanna", "apple", "cheery", "orange", "watermelon"]
// console.log(fruits)
// console.log(fruits[0]);
// console.log(fruits.length);

// loop on array
let fruits = ["mango", "bnanna", "apple", "cheery", "orange", "watermelon"]
// for (i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// we have short method to use loop with array that is for loop

for (let el of fruits) {
    console.log(el);
}

// practice question

let marks = [85, 97, 44, 37, 76, 60]
console.log(marks.length);

let sum = 0;
for (let val of marks) {
   sum+= val
}
console.log(sum);

let avgmarks = sum / marks.length;
console.log(avgmarks);


// practice questions 2

// let price = [250, 645, 300, 900, 50]

// for (i = 0; i < price.length; i++){
//     let offer = price[i] / 10;
//     price[i] -= offer;
// }
// console.log(price);


// array methods
// push
let veges = ["carrot", "cocumber", "potato", "chiilies", "onion", "corriender"];

console.log(veges);

// (veges.push("tomato", "lemon"));
// console.log(veges)
// pop
// (veges.pop())
// console.log(veges);

// to string
let price = [250, 645, 300, 900, 50]
console.log(price);
console.log(price.toString());
console.log(price);


// to concat

// let clothes = ["jeans", "shirts", "skirts", "tops", "kurta", "frok", "maxy"];
// let shoes = ["jogers", "sendles", "slipers", "shoes" , "pumpies"]
// console.log(clothes.concat(shoes));


// unshift
// let shoes = ["jogers", "sendles", "slipers", "pumpies"]
//     console.log(shoes)
// shoes.unshift("shoes", "heals");
// console.log(shoes)

// shift
// shoes.shift()
// console.log(shoes);

// slice
// console.log(shoes.slice(1, 3));

// splice
let her = ["jogers", "sendles", "slipers", "pumpies"]
console.log(her);
her.splice(2, 2, );
console.log(her);

// last practice set
// 
let companies = ["blomberg", "Microsoft", "Uber", "Google", "IBM", "netflix"]
console.log(companies);
// a remove first company
(companies.shift())
console.log(companies);
// 1st task done

// b  remove uber and add ola in its place

(companies.splice(1, 1, "Ola"));
console.log(companies);
// task done

// c add amazon at the end
(companies.push("amazon"));
console.log(companies);
