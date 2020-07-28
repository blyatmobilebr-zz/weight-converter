let inputValue = document.querySelector("#kgValue").addEventListener("input", convertValue);
let outputVisibility = document.querySelector("#output");
outputVisibility.style.visibility = "hidden";

function convertValue(event) {
  outputVisibility.style.visibility = "visible";
  let value = event.target.value;
  let grams = document.querySelector("#gramsOutput");
  let lbs = document.querySelector("#lbsOutput");
  let ounces = document.querySelector("#ouncesOutput");

  grams.innerHTML = value * 1000;
  lbs.innerHTML = (value * 2.2065).toFixed(2);
  ounces.innerHTML = (value * 35.274).toFixed(2);
}
