let lampe = document.querySelector(".lampe");
setInterval(() => {
  lampe.classList.toggle("allume");
  lampe.classList.toggle("eteinte");
}, 1000);

let regions = [
  "Tunis",
  "Jerba",
  "Sfax",
  "Kasserine",
  "Sousse",
  "Beja",
  "Mahdia",
  "Bizerte",
];
function createLi(content) {
  return `<li>${content}</li>`;
}
/**
 * Cette fonction permet d'....
 * @param {*} elements : l'ensemble des éléméent à afficher
 * @param {*} container : la balise qui va contenir les éléménets
 * @param {*} createElement : la fonction qui va créer l'él"m"nt html à insérer
 * @param {*} timer : Le nombre de milliseconde entre chaque opération
 */
function iterateOverElements(elements, container, createElement, timer = 1000) {
  let index = 0;
  setInterval(() => {
    if (index < elements.length) {
      container.innerHTML += createElement(elements[index++]);
    } else {
      container.innerHTML = "";
      index = 0;
    }
  }, timer);
}
// 1 récupérer l'objet
const olRegions = document.querySelector("#regions");

iterateOverElements(regions, olRegions, createLi);
// 2 Ajouter un li correspondant à une ville

// 3 Quand on arrive à la fin on vide le ol

function createImage(src, width = 50, heigth = 50, alt = "NotFound") {
  const image = document.createElement("img");
  image.src = src;
  image.width = width;
  image.height = heigth;
  image.alt = alt;
  return image;
}

const image = createImage("ssr.png");

const body = document.querySelector("body");

body.insertBefore(image, body.firstChild);
