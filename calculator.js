// -------- Calculator ---------------------------

idx = 0;

function calcTruck() {
  let truckNo = parseInt(document.getElementById("input_item_truck").value);
  let euroClass = document.getElementById("select_euro").value;
  let dmc = document.getElementById("input_item_dmc").value;
  let truckKm = document.getElementById("input_item_km").value;

  let span = document.getElementById("result");

  // let truckNoNew = parseInt(
  //   document.getElementById(`input_item${idIndex}`).value
  // );
  // let euroClassNew = document.getElementById(`select_euro${idIndex}`).value;
  // let dmcNew = document.getElementById(`input_item_dmc${idIndex}`).value;
  // let truckKmNew = document.getElementById(`input_item_km${idIndex}`).value;
  // // console.log(truckKm, euroClass, dmc, truckNo);
  // console.log(truckKmNew, euroClassNew, dmcNew, truckNoNew);

  //   const e6 = {
  //     name: "E6",
  //     dmc: "A",
  //     p1: 0.014,
  //     p2: 0.2
  //   };
  //
  // let resutCllass ;
  //
  // let userInput = "E6";
  //   switch (userInput) {
  //     case "E6":
  //     resutCllass=e6;
  //
  //   }

  // } else if ((euroClass === "E6") & (dmc === "B")) {
  //   let moneyAmount = truckKm * 0.002 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E6") & (dmc === "C")) {
  //   let moneyAmount = truckKm * 0.004 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E6") & (dmc === "D")) {
  //   let moneyAmount = truckKm * 0.005 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // }
  // BASE --------------

  if ((euroClass === "E6") & (dmc === "A")) {
    let moneyAmount = truckKm * 0.014 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E6") & (dmc === "B")) {
    let moneyAmount = truckKm * 0.002 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E6") & (dmc === "C")) {
    let moneyAmount = truckKm * 0.004 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E6") & (dmc === "D")) {
    let moneyAmount = truckKm * 0.005 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  }

  // ---------- EURO 5 --------------

  if ((euroClass === "E5") & (dmc === "A")) {
    let moneyAmount = truckKm * 0.014 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E5") & (dmc === "B")) {
    let moneyAmount = truckKm * 0.002 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E5") & (dmc === "C")) {
    let moneyAmount = truckKm * 0.004 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E5") & (dmc === "D")) {
    let moneyAmount = truckKm * 0.004 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  }

  // ------------ EURO 4 ------------

  if ((euroClass === "E4") & (dmc === "A")) {
    let moneyAmount = truckKm * 0.013 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E4") & (dmc === "B")) {
    let moneyAmount = truckKm * 0.001 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E4") & (dmc === "C")) {
    let moneyAmount = truckKm * 0.003 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E4") & (dmc === "D")) {
    let moneyAmount = truckKm * 0.003 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  }

  // -----------  EURO 3 ------------

  if ((euroClass === "E3") & (dmc === "A")) {
    let moneyAmount = truckKm * 0.012 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E3") & (dmc === "B")) {
    let moneyAmount = truckKm * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E3") & (dmc === "C")) {
    let moneyAmount = truckKm * 0.002 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E3") & (dmc === "D")) {
    let moneyAmount = truckKm * 0.002 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  }

  // ---------- EURO 2 --------------

  if ((euroClass === "E2") & (dmc === "A")) {
    let moneyAmount = truckKm * 0.011 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E2") & (dmc === "B")) {
    let moneyAmount = (truckKm - truckKm * 1.001) * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E2") & (dmc === "C")) {
    let moneyAmount = truckKm * 0.001 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E2") & (dmc === "D")) {
    let moneyAmount = truckKm * 0.001 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  }

  // ------------ EURO 1 -------------

  if ((euroClass === "E1") & (dmc === "A")) {
    let moneyAmount = truckKm * 0.011 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E1") & (dmc === "B")) {
    let moneyAmount = (truckKm - truckKm * 1.001) * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E1") & (dmc === "C")) {
    let moneyAmount = truckKm * 0.001 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if ((euroClass === "E1") & (dmc === "D")) {
    let moneyAmount = truckKm * 0.001 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  }
  let userData = {
    liczbaTirow: truckNo,
    spalanie: euroClass,
    waga: dmc,
    liczbaKm: truckKm,
    zwrotEuro: result.textContent,
  };
  console.log(userData);
}
