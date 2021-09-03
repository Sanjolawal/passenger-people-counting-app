
var a = 0
let c = document.getElementById("show");
console.log(c)
let d = document.getElementById("save");
console.log(d)
function count(){
    a = a + 1
    console.log(a)
    c.innerText = a
}
count()

function decrease(){
     a = a - 1
     c.innerText = a
     console.log(a) 
}
function reset(){
    a = 0 
    console.log(a)
    c.innerText = a
}
function save(){
    d.innerText = d.innerText + ("-") +("") + c.innerText
    c.innerText = 0 
    a = 0
}
