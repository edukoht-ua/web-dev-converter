const unitsMap = new Map();

unitsMap.set("meter", 1);
unitsMap.set("milimeter", 1000);
unitsMap.set("centimeter", 100);
unitsMap.set("kilometer", 0.001);
unitsMap.set("mile", 0.0006213712);

const convertButton = document.getElementById("convertButton");

const input = document.getElementById("input");
const output = document.getElementById("output");

const unitsFrom = document.getElementById("unitsFrom");
const unitsTo = document.getElementById("unitsTo");

let checkedFrom = document.createElement("div");
let checkedTo = document.createElement("div");

checkedFrom.classList.add("checked");
checkedTo.classList.add("checked");

convertButton.addEventListener("click", () => {
    if (checkedFrom.innerHTML === "" || checkedTo.innerHTML === "") {
        alert("Some of the units are undefiend!");
    } else {
        output.innerHTML = input.value / unitsMap.get(checkedFrom.innerHTML) * unitsMap.get(checkedTo.innerHTML);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    for(unit of unitsMap) {
        const unitFrom = document.createElement("div");
        const unitTo = document.createElement("div");

        unitFrom.classList.add("unit");
        unitTo.classList.add("unit");

        unitFrom.innerHTML = unit[0];
        unitTo.innerHTML = unit[0];

        unitFrom.addEventListener("click", () => {
            if (!unitFrom.classList.contains("checked")) {
                unitFrom.classList.add("checked");
                checkedFrom.classList.remove("checked");
                checkedFrom = unitFrom;
            } else {
                unitFrom.classList.remove("checked");
                
            }
        });


        unitTo.addEventListener("click", () => {
            if (!unitTo.classList.contains("checked")) {
                unitTo.classList.add("checked");
                checkedTo.classList.remove("checked");
                checkedTo = unitTo;
            } else {
                unitTo.classList.remove("checked");
            }
        });

        unitsFrom.appendChild(unitFrom);
        unitsTo.appendChild(unitTo);
    }
})