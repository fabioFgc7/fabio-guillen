
import { HabilidadTecnicos, Herramientas, Links, Project } from "../types";

export const skillTecnico: HabilidadTecnicos[] = [
  {
    id: "Racs9bjLPpJUR5QHYL1h2",
    title: "JavaScript",
    color: "#f7df1e",
    aosAnimated: "fade-up-right",
    shadow: "shadow-[#f7df1e]",
    icon: './icons/282802_javascript_js_icon.svg',
  },
  {
    id: "Racs9bjLPpJUR5QHYL1wedsH",
    title: "HTML",
    color: "#e96228",
    aosAnimated: "fade-up-right",
    shadow: "shadow-[#e96228]",
    icon:'./icons/317755_badge_html_html5_achievement_award_icon.svg',
  },
  {
    id: "Racs9bj4rTypJUR5QHYL1h2",
    title: "CSS",
    color: "#254bdd",
    aosAnimated: "fade-up-right",
    shadow: "shadow-[#254bdd]",
    icon: './icons/317756_badge_css_css3_achievement_award_icon.svg',
  },
  {
    id: "Racs9bj452DeesLPpJUR5QHYL1h2",
    title: "React",
    color: "#07b0ce",
    aosAnimated: "fade-up-left",
    shadow: "shadow-[#07b0ce]",
    icon: './icons/1174949_js_react js_logo_react_react native_icon.svg',
  },
  {
    id: "Wqae23acs9bjLPpJUR5QHYL1h2",
    title: "TypeScript",
    color: "#2f74c0",
    aosAnimated: "fade-up-left",
    shadow: "shadow-[#2f74c0]",
    icon: './icons/11120662_fi_brands_typescript_icon.svg',
  },
  {
    id: "Wqae23acs9bjLPpJUR5QHewewqasadca",
    title: "Tailwind",
    color: "#36b7f0",
    aosAnimated: "fade-up-left",
    shadow: "shadow-[#36b7f0]",
    icon: './icons/9073628_tailwind_icon.svg',
  },
];
export const herramientas: Herramientas[] = [
  {
    id: "Racs9s342",
    title: "Git",
    color: "#e84d31",
    aosAnimated: "fade-up-right",
    shadow: "shadow-[#e84d31]",
    icon: './icons/2993773_git_social media_icon.svg',
  },
  {
    id: "Racs9bjLPpJUR5QHwedxasxsH",
    title: "GitHub",
    color: "#000",
    aosAnimated: "fade-up-right",
    shadow: "shadow-[#000]",
    icon:'./icons/211904_social_github_icon.svg',
  },
  {
    id: "Racs9bj4rTypJUR5wersdsQHYL1h2",
    title: "NPM",
    color: "#c60001",
    aosAnimated: "fade-up-right",
    shadow: "shadow-[#c60001]",
    icon: './icons/8666417_npm_icon.svg',
  },
  {
    id: "32weqeesLPpJUR5QHYL1h2",
    title: "Figma",
    color: "#f76e5f",
    aosAnimated: "fade-up-left",
    shadow: "shadow-[#f76e5f]",
    icon:'./icons/7564187_figma_logo_brand_icon.svg',
  },
  {
    id: "Wqae23acs9bjLPpJUR5QHYL1h2",
    title: "Vsc",
    color: "#36b7f0",
    aosAnimated: "fade-up-left",
    shadow: "shadow-[#36b7f0]",
    icon:'./icons/7417366_vs code_visual studio code_logo_code_icon.svg',
  },
  
 
];

//Navegacion
export const listaNav: Links[] = [
  {
    id: 1,
    title: "Inicio",
    link: "home",
  },
  {
    id: 2,
    title: "Sobre mi",
    link: "about",
  },
  {
    id: 3,
    title: "Habilidades",
    link: "skill",
  },
  {
    id: 4,
    title: "Proyectos",
    link: "work",
  },
  {
    id: 5,
    title: "Contacto",
    link: "contact",
  },
];
//Priyectos
 export const proyectos: Project[]=  [{
  id: "asdfghcvAswa3c",
  title: "Mi Portafolio",
  description: "Mi Portafolio Web muestra mi experiencia como desarrollador web y diseñador de interfaces de usuario, destacando mi habilidad para crear sitios web atractivos y funcionales.",
  enlance: {
    linkPage: "https://fabiofgc7.github.io/fabio-guillen/",
    linkGitHub: "https://github.com/fabioFgc7/fabio-guillen/"
  },
  image: "./images/fabio-web-site.jpg",
  animatedAos: "zoom-in-left",
  tecnologiasUtilizadas: {
    lenguajes: [
      "./icons/317755_badge_html_html5_achievement_award_icon.svg",
      "./icons/11120662_fi_brands_typescript_icon.svg",
      "./icons/317756_badge_css_css3_achievement_award_icon.svg"
    ],
    herramientasYBibliotecas: [
      "./icons/1174949_js_react js_logo_react_react native_icon.svg",
      "./icons/9073628_tailwind_icon.svg"
    ],
    otrasTecnologias: ["GitHub Pages"]
  },
  caracteristicasDestacadas: [
    "Diseño Responsivo",
    "Sobre Mí",
    "Mi habilidades",
    "Galería de Proyectos",
    "Formulario de contacto"
  ],
  procesoDesarrollo: {
    planificacion: "Definí la estructura y el diseño del portafolio, así como los elementos que quería destacar.",
    diseno: "Creé un diseño limpio y atractivo que refleja mi estilo personal y enfatiza la usabilidad.",
    implementacion: "Utilicé React para construir las páginas y Tailwind para la estilización. También me aseguré de que el sitio se cargara de manera eficiente.",
    pruebas: "Probé el sitio en varios navegadores y dispositivos para garantizar que funcionara correctamente."
  },
  leccionesAprendidas: "Durante el desarrollo de mi portafolio web, aprendí la importancia de combinar el diseño con la funcionalidad para crear una experiencia atractiva para el usuario. También adquirí habilidades valiosas en la creación de sitios web responsivos y optimizados.",
  resultadosYLogros: "Ha servido como una herramienta efectiva para presentar mi trabajo a empleadores y clientes potenciales.",
  fechaFinalizacion: ""
},
{
  id: "aRtsvasdfghcvc",
  title: "Turismo espacial",
  description: "Un emocionante desafío de Frontend Mentor para crear un sitio web de turismo espacial interactivo y visualmente atractivo.",
  enlance: {
    linkPage: "https://fabiofgc7.github.io/space-tourism/",
    linkGitHub: "https://github.com/fabioFgc7/space-tourism"
  },
  image: "./images/turismo_espacial.jpg",
  animatedAos: "zoom-in-left",
  tecnologiasUtilizadas: {
    lenguajes: [
      "./icons/317755_badge_html_html5_achievement_award_icon.svg",
      "./icons/282802_javascript_js_icon.svg",
      "./icons/317756_badge_css_css3_achievement_award_icon.svg"
    ],
    herramientasYBibliotecas: [
      "./icons/1174949_js_react js_logo_react_react native_icon.svg",
      "./icons/9073628_tailwind_icon.svg"
    ],
    otrasTecnologias: ["GitHub Pages"]
  },
  caracteristicasDestacadas: [
    "Múltiples Páginas: Crea un sitio web de varias páginas con navegación entre secciones temáticas, como destinos, información sobre el espacio y opciones de reserva.",
    "Diseño Atractivo: Diseña un sitio web visualmente atractivo que refleje la emoción y el asombro del turismo espacial. Utiliza imágenes y elementos gráficos impactantes para capturar la atención de los visitantes.",
    "Interacción y Navegación Intuitiva: Implementa una navegación fluida y una experiencia de usuario intuitiva para que los visitantes puedan explorar fácilmente los diferentes destinos y opciones.",
    "Información Detallada: Proporciona información detallada sobre cada destino espacial, incluyendo datos científicos, imágenes y descripciones emocionantes.",
    "Reservas Simuladas: Incluye la funcionalidad de reserva simulada que permite a los visitantes personalizar su viaje espacial y obtener una idea de cómo sería realizar una reserva real."
 ],
  procesoDesarrollo :{
    planificacion: "Recree la página con mis habilidades.",
    diseno: "Es un diseño creado por Frontend Mentor.",
    implementacion: "Utilicé React para construir las páginas y Tailwind para la estilización. También me aseguré de que el sitio se cargara de manera eficiente.",
    pruebas: "Probé el sitio en varios navegadores y dispositivos para garantizar que funcionara correctamente."
  },
  leccionesAprendidas: "Durante el desarrollo del proyecto de turismo espacial, aprendí la importancia de combinar el diseño con la funcionalidad para crear una experiencia atractiva para el usuario. También adquirí habilidades valiosas en la creación de sitios web responsivos y optimizados.",
  resultadosYLogros: "Me ha servido como una práctica para usar mis habilidades.",
  fechaFinalizacion: ""
}

]