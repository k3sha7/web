addEventListener('scroll',function(){
    let navArea=document.getElementById('navbar');
    if(window.pageYOffset>600)
    {
        navArea.classList.add("fill");
    }
    else{
        navArea.classList.remove("fill")
}
});