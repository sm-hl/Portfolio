const header = document.querySelector("header");
const toggleicon = document.querySelector('.toggle-icon');
const aboutImg = document.querySelector('.about-img img');
const hero = document.querySelector('.hero');
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let scrollTop = document.querySelector('.scroll-top');
let today = new Date();
const year = document.getElementById('current-year');

toggleicon.addEventListener('click', () =>{
    toggleicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        aboutImg.src = 'img/Logo.png'; 
        hero.style.background = 'no-repeat right/40% url(../img/Logo-bg.png)'; 
        localStorage.setItem("mode","dark");
    } else {
        aboutImg.src = 'img/Logo-white.png'; 
        hero.style.background = 'no-repeat right/40% url(../img/Logo-white.png)'; 
        localStorage.setItem("mode","light");
    }
});

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY>120);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');

    if (window.scrollY > 60) {
        scrollTop.classList.remove('hidden');
    }else{
        scrollTop.classList.add('hidden');
    }
}

onload = () =>{
    let mode = localStorage.getItem("mode");

    if(mode == 'dark'){
        console.log(mode);
        document.body.classList.add('dark-mode');
        localStorage.setItem("mode","dark");
    }else{
        document.body.classList.remove('dark-mode');
        localStorage.setItem("mode","light");
    }
}

year.innerHTML = today.getFullYear();