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
const modalName = document.querySelector("#modal_input1");
const modalEmail = document.querySelector("#modal_input2");
const modalSelect = document.querySelector("#modal_input3");
const addinput = document.querySelector("#add_input");

let its = document.querySelector(".its");
let input = document.querySelectorAll(".input_itemA");
let bntAdd = document.querySelector(".btn_new");
let idIndex = 0;

const span = document.querySelector("#result");

let finalResult = 0;

const values = {
  E6A: 0.014,
  E6B: 0.002,
  E6C: 0.004,
  E6D: 0.005,

  E5A: 0.014,
  E5B: 0.002,
  E5C: 0.004,
  E5D: 0.004,

  E4A: 0.013,
  E4B: 0.001,
  E4C: 0.003,
  E4D: 0.003,

  E3A: 0.012,
  E3B: 1,
  E3C: 0.002,
  E3D: 0.002,

  E2A: 0.011,
  E2B: -0.001,
  E2C: 0.001,
  E2D: 0.001,

  E1A: 0.011,
  E1B: -0.001,
  E1C: 0.001,
  E1D: 0.001,
};

const initialObj = {
  eur: document.getElementById("select_euro"),
  dmc: document.getElementById("input_item_dmc"),
  truckKm: document.getElementById("input_item_km"),
  truckNo: document.getElementById("input_item_truck"),
};

const objArr = [initialObj];

const calc = document.querySelector(".btn_intput");

let userData = {
  initalData: {
    liczbaTirow: [],
    spalanie: [],
    waga: [],
    liczbaKm: [],
    zwrotEuro: [],
  },
  imie: "",
  email: "",
  płatność: "",
};

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

closer.addEventListener("click", hideModal);
closer2.addEventListener("click", hideModal);

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

    const newObject = {
      eur: document.querySelector(`#select_euro${idIndex}`),
      dmc: document.querySelector(`#input_item_dmc${idIndex}`),
      truckKm: document.querySelector(`#input_item_km${idIndex}`),
      truckNo: document.querySelector(`#input_item_truck${idIndex}`),
    };

    objArr.push(newObject);

    clickCount++;
  } else {
    return;
  }
}

function calcTruck() {
  for (let obj of objArr) {
    const eurVal = obj.eur.value;
    const dmcVal = obj.dmc.value;
    const truckNoVal = obj.truckNo.value;
    const truckKmVal = obj.truckKm.value;
    const val = values[eurVal + dmcVal];
    const result = val * truckNoVal * 11 * truckKmVal;
    finalResult += result;

    span.textContent = parseInt(finalResult);

    userData.initalData.liczbaTirow.push(truckNoVal);
    userData.initalData.spalanie.push(eurVal);
    userData.initalData.waga.push(dmcVal);
    userData.initalData.liczbaKm.push(truckKmVal);
    userData.initalData.zwrotEuro = parseInt(result);
  }
  // console.log(userData);
}

function sendInfo(e) {
  e.preventDefault();
  if (modalEmail.value === "" || modalSelect.value === "") {
    alert("Prosze wypełnij formularz!");
    modal.style.display = "block";

    return;
  } else {
    userData.imie = modalName.value;
    userData.email = modalEmail.value;
    userData.płatność = modalSelect.value;
    modal2.style.display = "block";

    console.log(userData);
  }
}

bntAdd.addEventListener("click", addItems);

btnCalc.addEventListener("click", function () {
  if (
    document.getElementById("input_item_km").value === "" ||
    document.querySelector(`#input_item_truck`).value === ""
  ) {
    alert("Prosze wypełnić formularz!");
    return;
  } else {
    calcTruck();

    modal.style.display = "block";
    backdrop.style.display = "block";
    header.style.display = "none";
  }
});
btnSend.addEventListener("click", function (e) {
  modal.style.display = "none";
  backdrop.style.display = "block";
  header.style.display = "none";
});
btnSend.addEventListener("click", sendInfo);

function remover() {
  btnRem = document.getElementById("remove_input" + idIndex);
  newItem = document.getElementById("input_item" + idIndex);
  newItem.parentNode.removeChild(newItem);
  objArr.splice(idIndex);
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
