

let ran  = document.querySelector("#random");

let inpbtn = document.querySelector(".input-color")

let colorApply = document.querySelector(".apply-btn")
let p = document.querySelector("#text")



colorApply.addEventListener("click",UserchangeColor);

function UserchangeColor(){
    let text = inpbtn.value;
    // console.log(text);
     document.body.style.backgroundColor = text;
    p.innerText = text;
    // console.log( p.innerText)
}





ran.addEventListener("click",changeColor);

function changeColor(){
    let c = "0123456789abcdef"
    let color = "#";
    for(let i=0;i<6;i++){
        color = color + c[Math.floor(Math.random()*c.length)];
    }
    document.body.style.backgroundColor = color;
}