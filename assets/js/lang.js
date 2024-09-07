const transitions = {
  fr: {
    french: "français",
    english: "anglais",
    iam: "je suis un ",
    aboutjob: "Développeur Web Junior",
    aboutdescription:
      "Jeune diplômé de la Faculté des Sciences et Techniques de Settat, titulaire d'une Licence Sciences et Techniques en Génie Informatique, je suis passionné par le développement web. Doté d'une expérience en freelance, je m'efforce de perfectionner mes compétences et de rester à jour avec les dernières technologies pour offrir des solutions créatives et performantes dans le domaine du développement web.",
    btncv: "curriculum vitae",
    btnprojects: "projets",
    languages: "langages",
    frameworks: "frameworks",
    tools: "outils",
    my: "mes",
    servicesdescription:
      "Je propose des services de développement web adaptés à vos besoins : landing pages optimisées, portfolios personnalisés, sites e-commerce avec gestion simplifiée et applications web sur mesure. Mon objectif est de fournir des solutions performantes et innovantes, tout en assurant une expérience utilisateur de qualité.",
    landingpageDescription:
      "Que vous ayez besoin d'une landing page simple avec une seule page et plusieurs sections ou d'un site multi-pages, nous créons des interfaces attrayantes et performantes pour captiver vos visiteurs.",
    portfolioTitle: "Portfolios Personnalisés",
    portfolioDescription:
      "Mettez en valeur votre travail avec un portfolio personnalisé. Nous créons des designs sur mesure pour présenter vos compétences, projets et expériences de manière professionnelle.",
    ecommerceTitle: "Sites E-commerces",
    ecommerceDescription:
      "Nous développons des sites e-commerce complets avec une interface utilisateur fluide pour présenter vos produits et une dashboard intuitive pour gérer vos ventes, vos stocks et vos clients.",
    webApplicationTitle: "Applications Web de Gestion",
    webApplicationDescription:
      "Optimisez la gestion de vos données avec des applications web sur mesure, adaptées à vos besoins spécifiques, qu'il s'agisse de gestion de projets, de clients ou de toute autre solution.",
    projectsTitle: "projets",
    projectsDescription:
      "Découvrez une sélection de mes projets qui illustrent ma passion pour le développement web. Chaque projet est une opportunité d'appliquer mes compétences techniques et de proposer des solutions créatives et fonctionnelles. Que ce soit des landing pages, des applications web interactives ou des plateformes e-commerce, chaque réalisation met en avant mon souci du détail et ma capacité à répondre aux besoins spécifiques des clients.",
    contactme: "Contactez-moi",
    sendMessage: "envoyer",
    projectLink: "lien du projet",
  },
  en: {
    french: "french",
    english: "english",
    iam: "I'm a ",
    aboutjob: "Junior Web Developer",
    aboutdescription:
      "A recent graduate from the Faculty of Science and Technology in Settat, holding a Bachelor's degree in Science and Technology with a specialization in Computer Engineering, I am passionate about web development. With freelance experience, I strive to perfect my skills and stay up-to-date with the latest technologies in order to offer creative and high-performance solutions in the field of web development.",
    btncv: "resume",
    btnprojects: "projects",
    languages: "languages",
    frameworks: "frameworks",
    tools: "tools",
    my: "my",
    servicesdescription:
      "I offer web development services tailored to your needs: optimized landing pages, customized portfolios, e-commerce websites with simplified management, and bespoke web applications. My goal is to provide high-performance and innovative solutions while ensuring a quality user experience.",
    landingpageDescription:
      "Whether you need a simple one-page landing page with multiple sections or a multi-page site, we create attractive and high-performing interfaces to captivate your visitors.",
    portfolioTitle: "Personalized Portfolio",
    portfolioDescription:
      "Showcase your work with a customized portfolio. We create tailored designs to professionally present your skills, projects, and experiences.",
    ecommerceTitle: "E-commerce Websites",
    ecommerceDescription:
      "We develop complete e-commerce websites with a smooth user interface to showcase your products and an intuitive dashboard to manage your sales, inventory, and customers.",
    webApplicationTitle: "Management Web Applications",
    webApplicationDescription:
      "Optimize your data management with bespoke web applications tailored to your specific needs, whether it's project management, client management, or any other solution.",
    projectsTitle: "projects",
    projectsDescription:
      "Discover a selection of my projects that showcase my passion for web development. Each project is an opportunity to apply my technical skills and offer creative and functional solutions. Whether it's landing pages, interactive web applications, or e-commerce platforms, each accomplishment highlights my attention to detail and my ability to meet clients' specific needs.",
    contactme: "Contact me",
    sendMessage: "send",
    projectLink: "project link",
  },
};

const languageSelctor = document.getElementById("language-selector");

languageSelctor.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang"));
});

const setLanguage = (language) => {
  const datalang = document.querySelectorAll("[data-lang");
  datalang.forEach((data) => {
    const translationKey = data.getAttribute("data-lang");
    data.textContent = transitions[language][translationKey];
  });
};
