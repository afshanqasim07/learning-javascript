// DOM Manuplation

let heading = document.querySelector("h1")
heading.innerHTML = 'HELLO JAVASCRIPT'

heading.style.backgroundColor = "lightpink";
let para = document.querySelector("#para")
let btn = document.getElementById("btn")
function changethepara() {
    para.innerHTML = "changed the html"
}

