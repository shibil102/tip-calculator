const reset = document.getElementById("rset");
const tipBtn = document.querySelectorAll("#tip_btn");
const bill = document.getElementById("bill");
const people = document.getElementById("nop");
const tipAmt = document.querySelector(".tipamt");
const totAmt = document.querySelector(".totamt");
// const custom = document.getElementById("custom");

let billValue;
let nop;
let perPersonTipAmount;
let totalAmount;
let customVal;

bill.addEventListener("change", (event) => {
  billValue = event.target.value;
});

people.addEventListener("change", (event) => {
  nop = event.target.value;
});

// custom.addEventListener("change", (event) => {
//   customVal = event.target.value;
// });

// function show() {
//   console.log(custom.value);
// }

const btnValue = (val) => {
  totalTipAmount(val, billValue, nop);
};

const totalTipAmount = (val, billValue, nop) => {
  const totalTipAmount = (billValue * val) / 100;
  console.log(totalTipAmount);
  perPersonTipAmount = totalTipAmount / nop;
  const total = billValue / nop;
  totalAmount = total + perPersonTipAmount;
  console.log("perPerson", perPersonTipAmount);
  console.log("total", totalAmount);

  tipAmt.innerHTML = perPersonTipAmount.toFixed(2);
  totAmt.innerHTML = totalAmount.toFixed(2);
};

reset.addEventListener("click", () => {
  perPersonTipAmount = 0.0;
  totalAmount = 0.0;
  bill.value = "";
  people.value = "";
  tipAmt.innerHTML = perPersonTipAmount;
  totAmt.innerHTML = totalAmount;
});
