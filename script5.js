const BASE_URL ="https://v6.exchangerate-api.com/v6/4ca0061931d81beaf5b2af6f/latest/USD"
const dropdowns = document.querySelectorAll(".dropdown select");
// console.log(dropdowns)
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  // console.log(select)
  for (currCode in countryList) {
    // console.log(currCode)
    let newOption = document.createElement("option");
    // console.log(newOption)
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    console.log(evt)
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(BASE_URL);
  let data = await response.json();
  console.log(data)
  let rate=data.conversion_rates[toCurr.value]
  console.log(rate)
  // let rate = data[toCurr.value.toLowerCase()];
  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  console.log(element.value)
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  // evt.preventDefault();
  updateExchangeRate();
});

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });