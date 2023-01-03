const totalAmount = document.querySelector(".total-person");
const tipAmount = document.querySelector(".tip-amount");
const people = document.querySelector(".person");
const bill = document.querySelector(".dollar");
const error = document.querySelector("#error");
const btn = document.querySelector(".btn");
const gridContainer = document.querySelector(".grid-container");
const customInput = document.querySelector(".custom");
let tip = 0;
people.addEventListener("focus", changeBorder);
bill.addEventListener("focus", changeBorder);
function changeBorder() {
  bill.style.border = "2px solid hsl(172, 67%, 45%)";
  people.style.border = "2px solid hsl(172, 67%, 45%)";
  error.style.display = "none";
}
gridContainer.childNodes.forEach((div) => {
  if (div.localName === "div") {
    div.addEventListener("click", () => {
      setTip(div);
      tipCalculator();
    });
  }
});
function setTip(div) {
  const text = div.textContent;
  tip = text.slice(0, text.length - 1);
}
function tipCalculator() {
  if (bill.value && people.value) {
    console.log(tip);
    const tipPercent = tip / 100;
    const tipTotal = tipPercent * parseInt(bill.value);
    const personAmount = tipTotal / parseInt(people.value);
    const total = parseInt(bill.value) + tipTotal;
    const amountTotal = total / parseInt(people.value);
    totalAmount.textContent = amountTotal.toFixed(2);
    tipAmount.textContent = personAmount.toFixed(2);
    people.style.border = "2px solid hsl(172, 67%, 45%)";
    people.style.border = "2px solid hsl(172, 67%, 45%)";
    error.style.display = "none";

    console.log("each person amount", personAmount);
    console.log("tip total", tipTotal);
    console.log("overall total", amountTotal);
  } else {
    people.style.border = "2px solid red";
    bill.style.border = "2px solid red";
    error.style.display = "inline";
  }
}
function resetFunc() {
  bill.value = "";
  people.value = "";
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
}
btn.addEventListener("click", resetFunc);
function customInputFunc(e) {
  if (e.keyCode === 13) {
    tip = customInput.value;
    tipCalculator();
  } else {
    console.log(`i am ${e.key}`);
  }
  // console.log(tip);
}
customInput.addEventListener("keyup", customInputFunc);
