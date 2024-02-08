// const lampe = document.querySelector(".lampe");
// undefined;
// lampe;

// setInterval(() => {
//   lampe.classList.toggle("eteinte");
//   lampe.classList.toggle("allume");
// }, 1000);

// /**
//  * Cette fonction test la documentation
//  * @param {*} a aaa
//  * @param {*} b bbb
//  * @param {*} c ccc
//  */
// function test(a, b,c) {}

// test();

const villes = ["Jerba", "Tunis", "Sfax", "Jendouba", "sousse"];
const ol = document.querySelector("#cities");

/**
 * Function iterateOverArrayInContainer
 *
 * @param {*} container : dom element that will contain the the element's list
 * @param {*} elements : array of elements
 * @param {*} printElement : the function that prints the content
 * @param {*} timer : nombre of milliseconds between each itertion
 */
function iterateOverArrayInContainer(
  container,
  elements,
  printElement,
  timer = 1000
) {
  let index = 0;
  setInterval(() => {
    if (index < elements.length) {
      container.innerHTML += printElement(elements[index++]);
    } else {
      index = 0;
      container.innerHTML = "";
    }
  }, timer);
}
const printLi = (element) => `<li>${element}</li>`;

//iterateOverArrayInContainer(ol, villes, printLi);

function createImageNode(src, width = 50, height = 50, alt = "Not Found") {
  const image = document.createElement("img");
  image.width = width;
  image.height = height;
  image.alt = alt;
  image.src = src;
  return image;
}
const body = document.querySelector("body");
const image = createImageNode("ssr.png", 150, 150);

body.insertBefore(image, body.firstChild);
