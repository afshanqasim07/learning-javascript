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

// addmoviesname(prompt("enter your favourite movie"))
function adddrinks() {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(adddrinks))
  document.getElementById("DRINKS").appendChild(li)
}
adddrinks("tea")