let account = 15;
let kadechIssalni = 10;
const wa3d = new Promise((noufi, maNoufich) => {
  setTimeout(() => {
    if (account > kadechIssalni) {
      noufi(kadechIssalni);
      account -= kadechIssalni;
    } else {
      maNoufich({
        nssaba9: account,
        stanaA3leya: kadechIssalni - account,
      });
    }
  }, 2000);
});

const success = (floussi) => {
  console.log("I3aychek Ya3tik essa7a, rahou 93adlek fel compte", account);
};
wa3d.then(success).catch((message) => {
  console.log(`Non ${message.nssaba9} chwaya a3leya`);
});
setTimeout(() => {
  account -= Math.ceil(Math.random() * account);
}, 1000);
