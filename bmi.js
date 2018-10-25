"use strict"

// let value = prompt("enter value 0-100", "numbers only!" );
// let push;
// let arrow = document.querySelector('#arrow');

// function pushArrow(){
//     push = value * 4.56;
//     console.log(push + "px");
//     arrow.style.left = push + "px";
//     console.log(arrow.style);
// }
// pushArrow();

let heightField = document.querySelector("#heightInput");
let heightUnits = document.querySelector("#heightUnits");
let weightField = document.querySelector("#weightInput");
let weightUnits = document.querySelector("#weightUnits");
let metricHeightButton = document.querySelector("#metricHeight");
let imperialHeightButton = document.querySelector("#imperialHeight");
let metricWeightButton = document.querySelector("#metricWeight");
let imperialWeightButton = document.querySelector("#imperialWeight");
let answer = document.querySelector(".answer");
let arrow = document.querySelector(".arrow");
let Height;
let Weight;
let result;

function toImperialH() {
    if (heightUnits.innerText == "cm") {
        let currentValue = heightField.value;
        heightField.value = Math.round((currentValue/2.54)*100)/100;
        heightUnits.innerText = "in";
        metricHeightButton.classList.remove("active");
        imperialHeightButton.classList.add("active");
    }    
}

function toMetricH() {
    if (heightUnits.innerText == "in") {
        let currentValue = heightField.value;
        heightField.value =  Math.round(currentValue*254)/100;
        heightUnits.innerText = "cm";
        metricHeightButton.classList.add("active");
        imperialHeightButton.classList.remove("active");
    }
}
function toImperialW() {
    let currentValue = weightField.value;
    weightField.value = Math.round((currentValue/0.453592)*100)/100;
    weightUnits.innerText = "lb";
    metricWeightButton.classList.remove("active");
    imperialWeightButton.classList.add("active");
}
function toMetricW() {
    let currentValue = weightField.value;
    weightField.value = Math.round(currentValue*45.3592)/100;
    weightUnits.innerText = "kg";
    metricWeightButton.classList.add("active");
    imperialWeightButton.classList.remove("active");
}

function switchGenderToMale() {
    document.querySelector(".femaleButton").classList.remove("active");
    document.querySelector(".maleButton").classList.add("active");
}

function switchGenderToFemale() {
    document.querySelector(".maleButton").classList.remove("active");
    document.querySelector(".femaleButton").classList.add("active");
}

function getValues() {
    if (heightUnits.innerText == "cm") {
        Height = heightField.value / 100;
    } else {
        Height = heightField.value * 0.0254
    }
    if (weightUnits.innerText == "kg") {
        Weight = weightField.value / 1;
    } else {
        Weight = weightField.value * 0.453592
    }
    console.log("Height - " + Height);
    console.log("Weight - " + Weight);
}

function calculateResult() {
    getValues();
    result = Weight / ( Height * Height);
}

function showResult() {
    calculateResult();
    decorateResult();
    pushArrow();
    if (Weight != 0 && Height != 0){
        answer.innerText = Math.round(result*100)/100;
    }
}

function decorateResult() {
    if (result < 25 && result >= 18.5) {
        answer.style.color = "#78A50E";
    } else if (result >= 25 && result < 30) {
        answer.style.color = "#FDB913";
    } else {
        answer.style.color = "#ED1C24";
    }
}

function pushArrow() {
    if (Weight != 0 && Height != 0) {
        if (result < 18.5) {
            let push = -270 + (4.865 * result)
            arrow.style.left = push + "px";
        } else if (result >= 18.5 && result < 25) {
            let push = 35.077 * (result - 18.5) - 180;
            arrow.style.left = push + "px";
        } else if (result >= 25 && result < 30) {
            let push = 25.6 * (result - 25) + 50;
            arrow.style.left = push + "px";
        } else if (result >= 30 && result < 45) {
            let push = 6 * (result - 30) + 179;
            arrow.style.left = push + "px";
        } else {
            arrow.style.left = "270px"
        }
    }
}