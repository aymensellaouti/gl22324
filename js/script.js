const t = [1, 2, 11, 21, 3, 31, 4];
function compareNumbers(el1, el2) {
  return el1 - el2;
}
console.log(t.sort(compareNumbers));
// t.forEach(function (val, index) {
//   console.log(
//     `
//         *****************
//         Pour l'indice ${index} on a la valeur ${val}
//         *****************
//         `
//   );
// });

console.log(
  "PRODUCT : ",
  t.reduce((acc, element) => (element ? element * acc : acc))
);

const age = 5;
const firstname = "ahmed";

user = { age, firstname };

function test2(var1, var2, ...args) {
  console.log(var1);
  console.log(var2);
  console.log(args);
}

test2(1);
