// events in js 
// document.getElementById("image3").addEventListener("click", function (e) {
//     alert("image3 is clicked")
//     console.log("image 3 is clicked");
// }, false)
// document.getElementById("myul").addEventListener("click", function (e) {
//     console.log("ul is also clicked");
// }, true)

// it always bubles so it works like downward to upward and its false thatswhy bubling happend  in this so for egnoring it we can chnae the default value of false into true so it wil work correctly and that called capturing mood .
//  now we have some methods to access the things in this so
// e.stoppropagation : so it will stop bubling capturing by default

// events methods


let image = document.getElementById("image")
image.addEventListener("click", function (e) {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.parentNode)
    const removeit = e.target.parentNode
    removeit.remove()
   
})