let french = document.getElementById('fr');
let english = document.getElementById('en');
let language = document.querySelectorAll('.lang');

let home = document.getElementById('h-home');
let about = document.getElementById('h-about');
let services = document.getElementById('h-services');
let portfolio = document.getElementById('h-portfolio');
let contact = document.getElementById('h-contact');

function changeLang(lang){
  language[0].classList.remove('active');
  language[1].classList.remove('active');
  if(lang === "en"){        
    english.classList.add('active');
    //lang
    french.innerHTML = "Fr";
    english.innerHTML = "En";
    //header
    home.innerHTML = "Home";
    about.innerHTML = "About";
    services.innerHTML = "Services";
    portfolio.innerHTML = "Portfolio";
    contact.innerHTML = "Contact";

    
  }else if(lang === "fr"){
    french.classList.add('active'); 
    //lang
    french.innerHTML = "Fr";
    english.innerHTML = "An";
    //header
    home.innerHTML = "Accueil";
    about.innerHTML = "A propos";
    services.innerHTML = "Services";
    portfolio.innerHTML = "Portfolio";
    contact.innerHTML = "Contact";
  }
}