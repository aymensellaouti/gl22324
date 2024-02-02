let tab = [1, 2, 11, 21, 32, 4];
// tab.forEach(function (value, index, raniVarOkhra) {
//   raniVarOkhra = "cc";
//   console.log(raniVarOkhra);
//   console.log(`
//     *****************
//     pour l'indice ${index}, on a la valeur ${value}
//     *****************
//     `);
// });

console.log(
  tab.sort(function (el1, el2) {
    return el1 - el2;
  })
);

console.log(
  tab.reduce(function (acc, value) {
    return acc * value;
  })
);

JSON.stringify();

const set = new Set();
