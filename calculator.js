// // -------- Calculator ---------------------------

// idx = 0;

// function calcTruck() {
//   let truckNo = parseInt(document.getElementById("input_item_truck").value);
//   let euroClass = document.getElementById("select_euro").value;
//   let dmc = document.getElementById("input_item_dmc").value;
//   let truckKm = document.getElementById("input_item_km").value;

//   let span = document.getElementById("result");
//   if (
//     euroClass === "E6" &&
//     dmc === "A" &&
//     euroClassNew === undefined &&
//     dmcNew === undefined
//   ) {
//     let moneyAmount = truckKm * 0.014 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if (
//     euroClass === "E6" &&
//     dmc === "A" &&
//     euroClassNew.value === "E6" &&
//     dmcNew.value === "A"
//   ) {
//     let moneyAmount = truckKm * 0.014 * 11;
//     let moneyAmountNew = truckKmNew.value * 0.014 * 11;
//     let result =
//       parseInt(moneyAmount * truckNo) +
//       parseInt(moneyAmountNew * parseInt(truckNoNew.value));
//     span.textContent = result;
//   } else if (
//     (euroClass === "E6") & (dmc === "B") &&
//     euroClassNew.value === "E6" &&
//     dmcNew.value === "B"
//   ) {
//     let moneyAmount = truckKm * 0.002 * 11;
//     let moneyAmountNew = truckKmNew.value * 0.002 * 11;
//     let result =
//       parseInt(moneyAmount * truckNo) +
//       parseInt(moneyAmountNew * parseInt(truckNoNew.value));
//     span.textContent = result;
//   } else if (
//     (euroClass === "E6") & (dmc === "C") &&
//     euroClassNew.value === "E6" &&
//     dmcNew.value === "C"
//   ) {
//     let moneyAmount = truckKm * 0.004 * 11;
//     let moneyAmountNew = truckKmNew.value * 0.004 * 11;
//     let result =
//       parseInt(moneyAmount * truckNo) +
//       parseInt(moneyAmountNew * parseInt(truckNoNew.value));
//     span.textContent = result;
//   } else if (
//     (euroClass === "E6") & (dmc === "D") &&
//     euroClassNew.value === "E6" &&
//     dmcNew.value === "D"
//   ) {
//     let moneyAmount = truckKm * 0.005 * 11;
//     let moneyAmountNew = truckKmNew.value * 0.005 * 11;
//     let result =
//       parseInt(moneyAmount * truckNo) +
//       parseInt(moneyAmountNew * parseInt(truckNoNew.value));
//     span.textContent = result;
//   }
//   console.log(truckKm, truckNo);

//   if ((euroClass === "E6") & (dmc === "A")) {
//     let moneyAmount = truckKm * 0.014 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E6") & (dmc === "B")) {
//     let moneyAmount = truckKm * 0.002 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E6") & (dmc === "C")) {
//     let moneyAmount = truckKm * 0.004 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E6") & (dmc === "D")) {
//     let moneyAmount = truckKm * 0.005 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   }

//   // ---------- EURO 5 --------------

//   if ((euroClass === "E5") & (dmc === "A")) {
//     let moneyAmount = truckKm * 0.014 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E5") & (dmc === "B")) {
//     let moneyAmount = truckKm * 0.002 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E5") & (dmc === "C")) {
//     let moneyAmount = truckKm * 0.004 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E5") & (dmc === "D")) {
//     let moneyAmount = truckKm * 0.004 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   }

//   // ------------ EURO 4 ------------

//   if ((euroClass === "E4") & (dmc === "A")) {
//     let moneyAmount = truckKm * 0.013 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E4") & (dmc === "B")) {
//     let moneyAmount = truckKm * 0.001 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E4") & (dmc === "C")) {
//     let moneyAmount = truckKm * 0.003 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E4") & (dmc === "D")) {
//     let moneyAmount = truckKm * 0.003 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   }

//   // -----------  EURO 3 ------------

//   if ((euroClass === "E3") & (dmc === "A")) {
//     let moneyAmount = truckKm * 0.012 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E3") & (dmc === "B")) {
//     let moneyAmount = truckKm * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E3") & (dmc === "C")) {
//     let moneyAmount = truckKm * 0.002 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E3") & (dmc === "D")) {
//     let moneyAmount = truckKm * 0.002 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   }

//   // ---------- EURO 2 --------------

//   if ((euroClass === "E2") & (dmc === "A")) {
//     let moneyAmount = truckKm * 0.011 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E2") & (dmc === "B")) {
//     let moneyAmount = (truckKm - truckKm * 1.001) * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E2") & (dmc === "C")) {
//     let moneyAmount = truckKm * 0.001 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E2") & (dmc === "D")) {
//     let moneyAmount = truckKm * 0.001 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   }

//   // ------------ EURO 1 -------------

//   if ((euroClass === "E1") & (dmc === "A")) {
//     let moneyAmount = truckKm * 0.011 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E1") & (dmc === "B")) {
//     let moneyAmount = (truckKm - truckKm * 1.001) * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E1") & (dmc === "C")) {
//     let moneyAmount = truckKm * 0.001 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   } else if ((euroClass === "E1") & (dmc === "D")) {
//     let moneyAmount = truckKm * 0.001 * 11;
//     let result = parseInt(moneyAmount * truckNo);
//     span.textContent = result;
//   }
//   let userData = {
//     liczbaTirow: truckNo,
//     spalanie: euroClass,
//     waga: dmc,
//     liczbaKm: truckKm,
//     zwrotEuro: result.textContent,
//   };
//   console.log(userData);
// }
