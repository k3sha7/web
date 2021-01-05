const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const c = document.querySelector(".color");

btn.addEventListener("click",function(){
let colors="#";
for(let i=0;i<6;i++){
    colors += hex[rm()];
}
console.log(colors)
c.textContent=colors;
document.body.style.backgroundColor=colors;
c.style.color=colors;
document.getElementsByClassName('header').style.color=colors;
})
function rm(){
return Math.floor(Math.random()*hex.length);
}