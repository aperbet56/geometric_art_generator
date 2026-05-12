// Récupération des éléments HTML5
const btn = document.querySelector(".btn");
const boxes = document.querySelectorAll(".container div");
const year = document.querySelector(".year");

// Création des constantes shapes et colors
const shapes = [
  "quad__circle-1",
  "quad__circle-2",
  "quad__circle-3",
  "quad__circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
];

const colors = ["#ff0000", "#2bfafa", "#0000ff", "#ffff00"];

// Création de la fonction generatePattern qui va permettre de créér les formes géométriques de façcon aléatoire
const generatePattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    // Choix de la forme géométrique de façon aléatoire
    let i = Math.floor(Math.random() * shapes.length);
    // Choix de la couleur de la forme géométrique créée de manière aléatoire
    let j = Math.floor(Math.random() * colors.length);
    // Ajout de la classe
    box.classList.add(shapes[i]);
    // Mise en place du background-color
    box.style.backgroundColor = colors[j];
  });
};

// Ecouteurs d'événement et appel de la foncion generatePattern
btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);

// Récupération de la date actuelle et de l'année en cours
const today = new Date();
const currentYear = today.getFullYear();

// Affichage dynamique de l'année en cours
year.textContent = `${currentYear}`;
