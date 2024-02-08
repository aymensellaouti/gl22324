let account = 15;
let kadechIssalni = 10;

setTimeout(() => {
  account -= Math.ceil(Math.random() * account);
}, 1000);

async function awaitasync() {
  try {
    const wa3d = await new Promise((noufi, maNoufich) => {
      setTimeout(() => {
        if (account > kadechIssalni) {
          console.log("Bech noufi avec la valeur ", kadechIssalni);
          noufi(kadechIssalni);
          account -= kadechIssalni;
        } else {
          console.log("Mech bech noufi avec la valeur ", {
            nssaba9: account,
            stanaA3leya: 7,
          });
          maNoufich({
            nssaba9: account,
            stanaA3leya: 7,
          });
        }
      }, 2000);
    });
    console.log(wa3d);
  } catch (e) {
    console.log("Error: ");
    console.log(e);
  }
}
awaitasync();

// const success = (floussi) => {
//   console.log("I3aychek Ya3tik essa7a, rahou 93adlek fel compte", account);
// };
// wa3d.then(success).catch((message) => {
//   console.log(`Non ${message.nssaba9} chwaya a3leya`);
// });
