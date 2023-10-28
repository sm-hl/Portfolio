const header = document.querySelector("header");
const toggleicon = document.querySelector('.toggle-icon');
const aboutImg = document.querySelector('.about-img img');
const hero = document.querySelector('.hero');

toggleicon.addEventListener('click', () =>{
    toggleicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        aboutImg.src = 'img/Logo.png'; 
        console.log(hero.style.backgroundImage);
        hero.style.background = 'no-repeat right/40% url(../img/Logo-bg.png)'; 
    } else {
        aboutImg.src = 'img/Logo-white.png'; 
        console.log(hero.style.backgroundImage);
        hero.style.background = 'no-repeat right/40% url(../img/Logo-white.png)'; 
    }
});

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY>120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}