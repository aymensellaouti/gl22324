const t = [1, 2, 3, 11, 34, 4];
function compareNumbers(el1, el2) {
  return el1 - el2;
}
console.log(t.sort(compareNumbers));
// t.forEach(function (value, index, tab) {
//   console.log(`
//     ***************
//     dans la case ${index} il y a la valeur ${value}

//     `);
// });

function test(...args) {
  console.log(args);
}

test(...t); //test(1, 2, 3, 11, 34, 4)
