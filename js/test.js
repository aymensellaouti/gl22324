const tab = [1, 2, 3, 11, 21, 34, 4];
const compareNumbers = function (element1, element2) {
  return element1 - element2;
};
console.log(tab.sort(compareNumbers));

console.log(
  "SUM :",
  tab.reduce((acc, val) => (val ? acc * val : acc), 1)
);
// tab.forEach(function (val, indice, tableau) {
//   console.log(`
//         **************
//         ${indice} : ${val}
//         **************
//         `);
// });
