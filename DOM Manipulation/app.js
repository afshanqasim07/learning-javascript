//  DOM MANIPULATION
let heading = document.querySelector("#heading")
heading.innerHTML = 'HELLO JAVASCRIPT!'
heading.style.backgroundColor = "lightpink";
let para = document.getElementById("para")
let btn = document.getElementById("btn")
function changeme() {
    para.innerHTML = 'changed by javascript'
}
btn.addEventListener("click", changeme);

let myul = document.querySelectorAll("#ul")
Array.from(myul).forEach((item) => {
    item.style.backgroundColor = "lightblue"
})


