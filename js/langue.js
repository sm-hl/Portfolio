let french = document.getElementById("fr");
let english = document.getElementById("en");
let language = document.querySelectorAll('.lang');

let body = document.body;

let logo = document.getElementById("logo");

let home = document.getElementById("h-home");
let about = document.getElementById("h-about");
let services = document.getElementById("h-services");
let portfolio = document.getElementById("h-portfolio");
let contact = document.getElementById("h-contact");

let hero1 = document.getElementById("hero-1");
let hero2 = document.getElementById("hero-2");
let hero3 = document.getElementById("hero-3");
let heroBtn = document.getElementById("hero-btn");
let heroEncv = document.getElementById("hero-encv");
let heroFrcv = document.getElementById("hero-frcv");

let about1 = document.getElementById("about-1");
let about2 = document.getElementById("about-2");
let about3 = document.getElementById("about-3");
let about4 = document.getElementById("about-4");
let about5 = document.getElementById("about-5");
let about6 = document.getElementById("about-6");
let about7 = document.getElementById("about-7");
let aboutBtn = document.getElementById("about-btn");

let service1 = document.getElementById("service-1");
let service2 = document.getElementById("service-2");
let service3 = document.getElementById("service-3");
let service4 = document.getElementById("service-4");
let service5 = document.getElementById("service-5");
let service6 = document.getElementById("service-6");
let service7 = document.getElementById("service-7");

let portfolio1 = document.getElementById("portfolio-1");
let portfolio2 = document.getElementById("portfolio-2");
let portfolio3 = document.getElementById("portfolio-3");
let portfolio4 = document.getElementById("portfolio-4");
let portfolio5 = document.getElementById("portfolio-5");
let portfolio6 = document.getElementById("portfolio-6");
let portfolio7 = document.getElementById("portfolio-7");

let contact1 = document.getElementById("contact-1");
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactPhone = document.getElementById("contact-phone");
let contactMessage = document.getElementById("contact-message");
let contactBtn = document.getElementById("contact-btn");

let copyright = document.getElementById("copyright");

window.onload = () => {
  let getLanguage = localStorage.getItem("lang");
  if (getLanguage != null) {
    changeLang(getLanguage);
  }
};

function changeLang(getLanguage) {
  console.log('test');
  //store lang in localstorage
  localStorage.setItem("lang", getLanguage);

  language[0].classList.remove('active');
  language[1].classList.remove('active');
  if (getLanguage === "en") {
    body.classList.remove("rtl");

    // arabic.innerHTML = "Arabic";
    french.innerHTML = "Fr";
    english.innerHTML = "En";
    // class
    english.classList.add('active');

    //header
    home.innerHTML = "Home";
    about.innerHTML = "About";
    services.innerHTML = "Services";
    portfolio.innerHTML = "Portfolio";
    contact.innerHTML = "Contact";

    //hero section
    hero1.innerHTML = "Hi, There!";
    hero2.innerHTML = "I'm <span>Salma Halhoul</span>";
    hero3.innerHTML = "Software Engineer from ENSA Agadir.";
    heroBtn.innerHTML = "Hire me";
    heroEncv.innerHTML = "English CV";
    heroFrcv.innerHTML = "French CV";

    //about section
    about1.innerHTML = "I am <span>a Software Engineer</span>";
    about2.innerHTML = "grade:<span>Bac+5</span>";
    about3.innerHTML = "university:<span>ENSA Agadir</span>";
    about4.innerHTML = "speciality:<span>Web & Mobile Developer, UX Designer and Graphic Designer </span>";
    about5.innerHTML = "address:<span>Agadir, Morocco</span>";
    about6.innerHTML = "email:<span>Halhoulsalma79@gmail.com</span>";
    about7.innerHTML = "phone:<span>(+212) 711 090 348</span>";
    aboutBtn.innerHTML = "View all projects";

    //sevice section
    service1.innerHTML = "My <span>Services</span>";
    service2.innerHTML = "Web Developer";
    service3.innerHTML = `Designing, creating,
                    and maintaining websites and web applications.
                    Using languages such as HTML, CSS,
                    and JavaScript to build the visual and interactive
                    aspects of websites. Ensuring that websites
                    are functional, responsive, and user-friendly.`;
    service4.innerHTML = "UX Design";
    service5.innerHTML = `Enhancing the overall experience
                 that users have when interacting with digital products, 
                 such as websites, apps, or software. Conduct user research,
                 create user personas, design user interfaces, and ensure that
                 products are intuitive, accessible, and visually appealing.`;
    service6.innerHTML = "Graphic Designer";
    service7.innerHTML = `As a passionate Graphic Designer, I offer a wide range of services to meet your visual communication and multimedia needs. My expertise includes:
                Silent Videos: Creation of engaging and dynamic videos without audio, perfect for advertisements, presentations, or social media content.
                Designs: Crafting unique and customized designs, ideal for promoting events, brands, or messages.`;

    //portfolio section
    portfolio1.innerHTML = "My <span>Portfolio</span>";
    portfolio2.innerHTML = "My Portfolio Website";
    portfolio3.innerHTML = "Using Vanilla js (html css javascript)";
    portfolio4.innerHTML = "E-commerce Website for medical product";
    portfolio5.innerHTML = "Using JEE and Spring boot framework ";
    portfolio6.innerHTML = "Dental Clinic Management Website";
    portfolio7.innerHTML = "Using Spring boot framework, Bootstrap and Jquery";

    //contact section
    contact1.innerHTML = "Contact <span>Me</span>";
    contactName.placeholder = "Your name";
    contactEmail.placeholder = "Email Address";
    contactPhone.placeholder = "Your Phone";
    contactMessage.placeholder = "Write Message Here...";
    contactBtn.value = "Send Message";

    //footer
    copyright.innerHTML = `&copy; <span id="current-year"></span> | developed with <span class="heart">♥</span> by Salma Halhoul.`;
  } else if (getLanguage === "fr") {
    body.classList.remove("rtl");

    // arabic.innerHTML = "Arabe";
    french.innerHTML = "Fr";
    english.innerHTML = "An";
    // class
    french.classList.add("active");

    //header
    home.innerHTML = "Accueil";
    about.innerHTML = "À propos";
    services.innerHTML = "Services";
    portfolio.innerHTML = "Portfolio";
    contact.innerHTML = "Contact";

    //hero section
    hero1.innerHTML = "Bonjour ! Je suis,";
    hero2.innerHTML = "<span>Salma Halhoul</span>";
    hero3.innerHTML = "Ingénieure Informatique de l'ENSA Agadir.";
    heroBtn.innerHTML = "Engagez-moi";
    heroEncv.innerHTML = "CV en anglais";
    heroFrcv.innerHTML = "CV en français";

    //about section
    about1.innerHTML = "<span>ingénieure informatique</span>";
    about2.innerHTML = "diplôme :<span>Bac+5</span>";
    about3.innerHTML = "université :<span>ENSA Agadir</span>";
    about4.innerHTML =
      "spécialité :<span>Développeur Web & Mobile, Designer UX et Designer graphique</span>";
    about5.innerHTML = "adresse :<span>Agadir, Maroc</span>";
    about6.innerHTML = "email :<span>Halhoulsalma79@gmail.com</span>";
    about7.innerHTML = "téléphone :<span>(+212) 711 090 348</span>";
    aboutBtn.innerHTML = "Voir tous les projets";

    //sevice section
    service1.innerHTML = "Mes <span>Services</span>";
    service2.innerHTML = "Développeur Web";
    service3.innerHTML = `Conception, création et maintenance de sites Web et d'applications web.
                    Utilisation de langages tels que HTML, CSS et JavaScript pour construire les aspects visuels et interactifs des sites. 
                    S'assurer que les sites sont fonctionnels, réactifs et conviviaux.`;
    service4.innerHTML = "Design UX";
    service5.innerHTML = `Amélioration de l'expérience globale que les utilisateurs ont lorsqu'ils interagissent avec des produits numériques, 
                    tels que des sites web, des applications ou des logiciels. Réaliser des recherches utilisateur, créer des personas, 
                    concevoir des interfaces et s'assurer que les produits sont intuitifs, accessibles et visuellement attrayants.`;
    service6.innerHTML = "Designer graphique";
    service7.innerHTML = `En tant que Designer graphique passionnée, j'offre une large gamme de services pour répondre à vos besoins en communication visuelle et multimédia. 
                    Mon expertise inclut :
                    Vidéos silencieuses : Création de vidéos engageantes et dynamiques sans audio, parfaites pour les publicités, présentations ou contenus sur les réseaux sociaux.
                    Designs : Création de designs uniques et personnalisés, idéaux pour promouvoir des événements, des marques ou des messages.`;

    //portfolio section
    portfolio1.innerHTML = "Mon <span>Portfolio</span>";
    portfolio2.innerHTML = "Mon site Portfolio";
    portfolio3.innerHTML = "Utilisant Vanilla JS (HTML, CSS, JavaScript)";
    portfolio4.innerHTML = "Site e-commerce pour produits médicaux";
    portfolio5.innerHTML = "Utilisant le framework JEE et Spring Boot";
    portfolio6.innerHTML = "Site de gestion de clinique dentaire";
    portfolio7.innerHTML = "Utilisant le framework Spring Boot, Bootstrap et jQuery";                    

    //contact section
    contact1.innerHTML = "Contactez <span>Moi</span>";
    contactName.placeholder = "Votre nom";
    contactEmail.placeholder = "Adresse email";
    contactPhone.placeholder = "Votre téléphone";
    contactMessage.placeholder = "Écrivez votre message ici...";
    contactBtn.value = "Envoyer le message";

    //footer
    copyright.innerHTML = `&copy; <span id="current-year"></span> | développé avec <span class="heart">♥</span> par Salma Halhoul.`;
  }
}
