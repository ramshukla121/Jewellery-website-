//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

//navbar hide
let navbar = document.querySelectorAll('.nav-link');
let navbarCollapse = document.querySelector('.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navbarCollapse.classList.remove('show');
    })
});
