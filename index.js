// ------------- Start ----------
const btnSend = document.querySelector("#btnSend");
const modal2 = document.querySelector(".modal2");
const backdrop = document.querySelector(".calculator_backdrop");
const modal = document.querySelector(".modal");
const closer = document.querySelector(".modal__action--negative");
const closer2 = document.querySelector("#negative2");
const input2 = document.querySelector("#modal_input1");
const header = document.querySelector(".header");
const inputs = document.querySelector(".inputs");
const inputsItem = document.querySelectorAll(".inputs_item");
const btnCalc = document.querySelector("#button_calc");
const introBtn = document.querySelector(".intro__btn");
const sectionScroll = document.querySelector("#intro-p");

let its = document.querySelector(".its");
let input = document.querySelectorAll(".input_itemA");
let bntAdd = document.querySelector(".btn_new");
let idIndex = 0;

let span;
let truckNo;
let euroClass;
let dmc;
let truckKm;

let truckNoNew;
let euroClassNew;
let dmcNew;
let truckKmNew;

const calc = document.querySelector(".btn_intput");

// ------ Modal behavior -------

const hideModal = function () {
  modal.style.display = "none";
  backdrop.style.display = "none";
  header.style.display = "flex";
  modal2.style.display = "none";
};

backdrop.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hideModal();
  }
});

calc.addEventListener("click", function (e) {
  modal.style.display = "block";
  backdrop.style.display = "block";
  header.style.display = "none";
});

closer.addEventListener("click", hideModal);
closer2.addEventListener("click", hideModal);

btnSend.addEventListener("click", function (e) {
  e.preventDefault();
  if (input2.value === "" || input2.value === null) {
    alert("Prosze wypełnij luki!");
  } else {
    modal2.style.display = "block";
    backdrop.style.display = "block";
    modal.style.display = "none";
  }
});

// --------- CALCULATOR -------------
let clickCount = 0;
let clickLimit = 6;
function addItems() {
  idIndex = idIndex + 1;

  if (clickCount < clickLimit) {
    let newItem1 = document.createElement("div");
    newItem1.innerHTML =
      `<select id="select_euro${idIndex}" class="input_itemA input_item_new">
  <option value="E6" class="option1">Euro 6</option>
  <option value="E5" class="option2">Euro 5</option>
  <option value="E4" class="option3">Euro 4</option>
  <option value="E3" class="option4">Euro 3</option>
  <option value="E2" class="option5">Euro 2</option>
  <option value="E1" class="option6">Euro 1</option>
</select> ` +
      `<input type="number" min="0" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" name="number_of_trucks" placeholder="L. Ciężarówek" id="input_item_truck${idIndex}" class="input_itemA input_item_new">
` +
      `<select id="input_item_dmc${idIndex}" class="input_itemA input_item_new">
<option value="A" class="optionA">7,5t do 12t</option>
<option value="B" class="optionB">12 do 18t</option>
<option value="C" class="optionC">> 18t z 3 osi</option>
<option value="D" class="optionD">> 18t z 4 lub więcej osi</option>
</select>` +
      `<input type="number" min="0" oninput="this.value = 
    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" name="number_of_km" placeholder="Przejechane km" id="input_item_km${idIndex}" class="input_itemA input_item_new">
` +
      `<button type="button" id="remove_input${idIndex}" class="btn_new_negative" onclick = remover()>-</button>`;

    newItem1.setAttribute("id", "input_item" + idIndex);
    newItem1.setAttribute("class", "input_item_new");

    inputs.appendChild(newItem1);

    truckNoNew = document.querySelector(`#input_item_truck` + `${idIndex}`);
    euroClassNew = document.querySelector(`#select_euro` + `${idIndex}`);
    dmcNew = document.querySelector(`#input_item_dmc` + `${idIndex}`);
    truckKmNew = document.querySelector(`#input_item_km` + `${idIndex}`);

    span = document.querySelector("#result");
    clickCount++;
  } else {
    return;
  }
}

function calcTruck() {
  truckNo = parseInt(document.getElementById("input_item_truck").value);
  euroClass = document.getElementById("select_euro").value;
  dmc = document.getElementById("input_item_dmc").value;
  truckKm = document.getElementById("input_item_km").value;
  span = document.querySelector("#result");

  // BASE --------------

  if (
    euroClass === "E6" &&
    dmc === "A" &&
    euroClassNew === undefined &&
    dmcNew === undefined
  ) {
    let moneyAmount = truckKm * 0.014 * 11;
    let result = parseInt(moneyAmount * truckNo);
    span.textContent = result;
  } else if (
    euroClass === "E6" &&
    dmc === "A" &&
    euroClassNew.value === "E6" &&
    dmcNew.value === "A"
  ) {
    let moneyAmount = truckKm * 0.014 * 11;
    let moneyAmountNew = truckKmNew.value * 0.014 * 11;
    let result =
      parseInt(moneyAmount * truckNo) +
      parseInt(moneyAmountNew * parseInt(truckNoNew.value));
    span.textContent = result;
  } else if (
    (euroClass === "E6") & (dmc === "B") &&
    euroClassNew.value === "E6" &&
    dmcNew.value === "B"
  ) {
    let moneyAmount = truckKm * 0.002 * 11;
    let moneyAmountNew = truckKmNew.value * 0.002 * 11;
    let result =
      parseInt(moneyAmount * truckNo) +
      parseInt(moneyAmountNew * parseInt(truckNoNew.value));
    span.textContent = result;
  } else if (
    (euroClass === "E6") & (dmc === "C") &&
    euroClassNew.value === "E6" &&
    dmcNew.value === "C"
  ) {
    let moneyAmount = truckKm * 0.004 * 11;
    let moneyAmountNew = truckKmNew.value * 0.004 * 11;
    let result =
      parseInt(moneyAmount * truckNo) +
      parseInt(moneyAmountNew * parseInt(truckNoNew.value));
    span.textContent = result;
  } else if (
    (euroClass === "E6") & (dmc === "D") &&
    euroClassNew.value === "E6" &&
    dmcNew.value === "D"
  ) {
    let moneyAmount = truckKm * 0.005 * 11;
    let moneyAmountNew = truckKmNew.value * 0.005 * 11;
    let result =
      parseInt(moneyAmount * truckNo) +
      parseInt(moneyAmountNew * parseInt(truckNoNew.value));
    span.textContent = result;
  }
  console.log(truckKm, truckNo);

  // // ---------- EURO 5 --------------

  // if ((euroClass === "E5") & (dmc === "A")) {
  //   let moneyAmount = truckKm * 0.014 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E5") & (dmc === "B")) {
  //   let moneyAmount = truckKm * 0.002 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E5") & (dmc === "C")) {
  //   let moneyAmount = truckKm * 0.004 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E5") & (dmc === "D")) {
  //   let moneyAmount = truckKm * 0.004 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // }

  // // ------------ EURO 4 ------------

  // if ((euroClass === "E4") & (dmc === "A")) {
  //   let moneyAmount = truckKm * 0.013 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E4") & (dmc === "B")) {
  //   let moneyAmount = truckKm * 0.001 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E4") & (dmc === "C")) {
  //   let moneyAmount = truckKm * 0.003 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E4") & (dmc === "D")) {
  //   let moneyAmount = truckKm * 0.003 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // }

  // // -----------  EURO 3 ------------

  // if ((euroClass === "E3") & (dmc === "A")) {
  //   let moneyAmount = truckKm * 0.012 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E3") & (dmc === "B")) {
  //   let moneyAmount = truckKm * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E3") & (dmc === "C")) {
  //   let moneyAmount = truckKm * 0.002 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E3") & (dmc === "D")) {
  //   let moneyAmount = truckKm * 0.002 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // }

  // // ---------- EURO 2 --------------

  // if ((euroClass === "E2") & (dmc === "A")) {
  //   let moneyAmount = truckKm * 0.011 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E2") & (dmc === "B")) {
  //   let moneyAmount = (truckKm - truckKm * 1.001) * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E2") & (dmc === "C")) {
  //   let moneyAmount = truckKm * 0.001 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E2") & (dmc === "D")) {
  //   let moneyAmount = truckKm * 0.001 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // }

  // // ------------ EURO 1 -------------

  // if ((euroClass === "E1") & (dmc === "A")) {
  //   let moneyAmount = truckKm * 0.011 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E1") & (dmc === "B")) {
  //   let moneyAmount = (truckKm - truckKm * 1.001) * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E1") & (dmc === "C")) {
  //   let moneyAmount = truckKm * 0.001 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // } else if ((euroClass === "E1") & (dmc === "D")) {
  //   let moneyAmount = truckKm * 0.001 * 11;
  //   let result = parseInt(moneyAmount * truckNo);
  //   span.textContent = result;
  // }
  // let userData = {
  //   liczbaTirow: truckNo,
  //   spalanie: euroClass,
  //   waga: dmc,
  //   liczbaKm: truckKm,
  //   zwrotEuro: result.textContent,
  // };
  // console.log(userData);
}

btnCalc.addEventListener("click", calcTruck);

bntAdd.addEventListener("click", addItems);

function remover() {
  btnRem = document.getElementById("remove_input" + idIndex);
  newItem = document.getElementById("input_item" + idIndex);
  newItem.parentNode.removeChild(newItem);
  idIndex--;
  clickCount--;
}

introBtn.addEventListener("click", function () {
  sectionScroll.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".header__list").addEventListener("click", function (e) {
  e.preventDefault();
  if (
    e.target.classList.contains("header__listLink") ||
    e.target.classList.contains("home")
  ) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
