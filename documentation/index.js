const m = document.getElementById('switch')
const body = document.querySelector('.main-body')
const n = document.querySelector('#navbar')
m.addEventListener('click',function(){
    body.classList.toggle('dark')
    n.classList.toggle('dark')
})

