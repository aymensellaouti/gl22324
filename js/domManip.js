// const lampe = document.querySelector(".lampe");
// setInterval(() => {
//   lampe.classList.toggle("allume");
//   lampe.classList.toggle("eteinte");
// }, 1000);

const villes = [
  "jerba",
  "tunis",
  "sfax",
  "sousse",
  "gafsa",
  "kasserine",
  "beja",
  "bizerte",
  "kairouan",
  "tataouin",
];

/**
 * Cette fonction permet d'itérer sur un contenaire et
 * d'ajouter chaque timer ms l'element en lui appliquant
 * la fonction cb createElement
 * @param {*} container element du dom qui va contenir votre rendu html
 * @param {*} elements tableau des elements à ajouter
 * @param {*} createElement  fonction qui créer l'element à ajouter
 * @param {*} timer nombre de ms
 */
function iterateElementsOnContainer(
  container,
  elements,
  createElement,
  timer = 1000
) {
  let index = 0;
  container.innerHTML = "";
  setInterval(() => {
    if (index < elements.length) {
      container.innerHTML += createElement(elements[index++]);
    } else {
      container.innerHTML = "";
      index = 0;
    }
  }, timer);
}
let ols = document.querySelector(".villes");

const createLi = (value) => `<li>${value}</li>`;
//iterateElementsOnContainer(ols, villes, createLi);

function createImage(src, width, height, alt = "Not Found") {
  // 1 create the node
  const image = document.createElement("img");
  image.src = src;
  image.width = width;
  image.height = height;
  image.alt = alt;
  return image;
}

const container = document.querySelector(".container");

container.insertBefore(createImage("ssr.png", 150, 150), container.firstChild);
