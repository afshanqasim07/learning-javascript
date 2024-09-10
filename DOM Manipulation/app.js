//  DOM MANIPULATION
// let heading = document.querySelector("#heading")
// heading.innerHTML = 'HELLO JAVASCRIPT!'
// heading.style.backgroundColor = "lightpink";
// let para = document.getElementById("para")
// let btn = document.getElementById("btn")
// function changeme() {
//     para.innerHTML = 'changed by javascript'
// }
// btn.addEventListener("click", changeme);

// let myul = document.querySelectorAll("#ul")
// Array.from(myul).forEach((item) => {
//     item.style.backgroundColor = "lightblue"
// })
// DOM HOW TO MAKE HTML ELEMENENTS BY DOM

// let div = document.createElement("div")
// console.log(div);
// div.className = 'divone'
// div.id = 'div1'
// div.innerText = "element by js"
// document.body.appendChild(div)

// edit nd delete by Dom in js
// we add things by js 
// right way od adding things by js 
function adddrinks(drink) {
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(drink))
  document.querySelector("#DRINKS").appendChild(li)
} adddrinks('TEA')
adddrinks('COLDRINKS')
adddrinks('SHAKES')
adddrinks('ICECREAM')
// let userinpput = adddrinks(prompt("enter the drink"))
// console.log(userinput)


// edit (replacewith)
// let thirddrink = document.querySelector("li:nth-child(3)")
// let newli = document.createElement("li")
// newli.textContent = ("newli replace/edit drink");
// thirddrink.replaceWith(newli)
// the way od edit things by DOM

// let firstli = document.querySelector("li:nth-child(1)")
// let replaceli = document.createElement("li")
// replaceli.innerHTML = "replace li of tea"
// firstli.replaceWith(replaceli);
// can also use the outertml method and give it whole outer html



// REMOVE THINGS BY JS

// thats how we remove things by using remove function
let lastdrink = document.querySelector("li:last-child")
lastdrink.remove()