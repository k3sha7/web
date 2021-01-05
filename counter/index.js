let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const d = document.querySelector('#dec');
const r = document.querySelector('#rst');
const i = document.querySelector('#inc');

d.addEventListener('click',function(){
    count--; value.textContent = count;
    console.log(count)

});
r.addEventListener('click',function(){
    count = 0; value.textContent = count;
    console.log(count)

});
i.addEventListener('click',function(){
    count++; value.textContent = count;
    console.log(count)

});   


