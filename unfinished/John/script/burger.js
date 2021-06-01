let burger = document.getElementById('burger');
let list = document.querySelector('.menu__body');
let body = document.querySelector('body');
burger.addEventListener("click",function(){
    if(burger.classList.contains("_active")){
        burger.classList.remove("_active");
        list.classList.remove("_active");
        body.classList.remove("_locked");
    }else{
        burger.classList.add("_active");
        list.classList.add("_active");
        body.classList.add("_locked");
    }
    
})