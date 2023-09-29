/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//20 meters = 65,616 feet | 20 feet = 6,096 meters

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

    convertBtn.addEventListener("click", function() {
        let baseValue = Number(inputEl.value);
    
        // Calculate the converted values and round them to 3 decimal places
        const feetValue = (baseValue * meterToFeet).toFixed(3);
        const metersValue = (baseValue / meterToFeet).toFixed(3);
        const gallonsValue = (baseValue * literToGallon).toFixed(3);
        const litersValue = (baseValue / literToGallon).toFixed(3);
        const poundsValue = (baseValue * kiloToPound).toFixed(3);
        const kilosValue = (baseValue / kiloToPound).toFixed(3);
    
        lengthEl.textContent = `${baseValue} meters = ${feetValue} feet | ${baseValue} feet = ${metersValue} meters`;
        volumeEl.textContent = `${baseValue} liters = ${gallonsValue} gallons | ${baseValue} gallons = ${litersValue} liters`;
        massEl.textContent = `${baseValue} kilos = ${poundsValue} pounds | ${baseValue} pounds = ${kilosValue} kilos`;
    });



window.convertBtn = convertBtn