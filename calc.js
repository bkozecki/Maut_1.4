// // truckNo = parseInt(document.getElementById("input_item_truck").value);
// // euroClass = document.getElementById("select_euro").value;
// // dmc = document.getElementById("input_item_dmc").value;
// // truckKm = document.getElementById("input_item_km").value;
// const span = document.querySelector("#result");

// const values = {
//   E6A: 0.014,
//   E6B: 0.002,
//   E6C: 0.004,
//   E6D: 0.005,

//   E5A: 0.014,
//   E5B: 0.002,
//   E5C: 0.004,
//   E5D: 0.004,

//   E4A: 0.013,
//   E4B: 0.001,
//   E4C: 0.003,
//   E4D: 0.003,

//   E3A: 0.012,
//   E3B: 1,
//   E3C: 0.002,
//   E3D: 0.002,

//   E2A: 0.011,
//   E2B: -0.001,
//   E2C: 0.001,
//   E2D: 0.001,

//   E1A: 0.011,
//   E1B: -0.001,
//   E1C: 0.001,
//   E1D: 0.001,
// };

// const initialObj = {
//   eur: document.getElementById("select_euro"),
//   dmc: document.getElementById("input_item_dmc"),
//   truckKm: document.getElementById("input_item_km"),
//   truckNo: parseInt(document.getElementById("input_item_truck").value),
// };

// const arr = [initialObj]; //globalna zmienna

// //addItems...
// const newObject = {
//   eur: document.querySelector(`#select_euro + ${idIndex}`),
//   dmc: document.querySelector(`#input_item_dmc + ${idIndex}`),
//   truckKm: document.querySelector(`#input_item_km` + `${idIndex}`),
//   truckNo: parseInt(
//     document.querySelector(`#input_item_truck` + `${idIndex}`).value
//   ),
// };

// arr.push(newObject);

// // // arr = [initialObj, newObject, ...]

// //remover()
// // arr.remove()

// let finalResult = 0;

// // calcTruck...

// for (let obj in arr) {
//   const eurVal = obj.eur.value; // E6
//   const dmcVal = obj.dmc.value; // A
//   const truckNoVal = obj.truckNo;
//   const truckKmVal = obj.truckKm.value;
//   const val = values[eurVal + dmcVal]; // 0.014
//   const result = val * truckNoVal * 11 * truckKmVal;
//   finalResult += result;
// }

// span.textContent = finalResult;

// //    truckNoNew = document.querySelector(#input_item_truck + ${idIndex});
// //    euroClassNew = document.querySelector(#select_euro + ${idIndex});
// //  dmcNew = document.querySelector(#input_item_dmc + ${idIndex});
// //truckKmNew = document.querySelector(#input_item_km + ${idIndex});

// // truckNo = parseInt(document.getElementById("input_item_truck").value);
// //   euroClass = document.getElementById("select_euro").value;
// //   dmc = document.getElementById("input_item_dmc").value;
// //   truckKm = document.getElementById("input_item_km").value;
// //   span = document.querySelector("#result");

// // // const values = {
// // // 	E6A: 0.014,
// // //   ...
// // // }

// // const initialObj = {
// // 	eur: document.getElementById("input_item_truck"),
// //   dmc: document.getElementById("input_item_dmc")
// // };

// // const arr = [initialObj]; // globalna zmienna

// // //addItems...
// // const newObject = {
// // 	eur: document.querySelector(#input_item_truck + ${idIndex}),
// //   dmc: document.querySelector(#input_item_dmc + ${idIndex}),
// //   truckNo: ...,
// //   truckKn:
// // }
// // arr.push(newObject);

// // // arr = [initialObj, newObject, ...]

// // arr.remove()

// // let finalResult = 0; // globalna zmienna
// // // calcTruck...
// // finalResult = 0;
// // for(let obj in arr) {
// // 	const eurVal = obj.eur.value // E6
// // 	const dmcVal = obj.dmc.value // A
// //   const
// //   const val = values[eurVal+dmcVal] // 0.014
// //   const result = val * truckNo * truckKm
// //   finalResult += result;

// // }

// // //    truckNoNew = document.querySelector(#input_item_truck + ${idIndex});
// // //    euroClassNew = document.querySelector(#select_euro + ${idIndex});
// //   //  dmcNew = document.querySelector(#input_item_dmc + ${idIndex});
// //     //truckKmNew = document.querySelector(#input_item_km + ${idIndex});
