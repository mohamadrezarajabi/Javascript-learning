const InputElem = document.querySelector("#number-input");
const btnConvert = document.querySelector(".btn-convert");
const btnReset = document.querySelector(".btn-reset");
const pElem = document.querySelector("#result")

btnConvert.addEventListener("click", function () {
    
    let change;
    
    if (InputElem.value.trim() !== "" && !isNaN(InputElem.value)){
        change = (InputElem.value * 1.8) + 32
        InputElem.style.borderBottom =  "2px solid #ccc"
        pElem.innerHTML = `${change}<span>&deg;F</span>`
    } else {
        InputElem.style.borderBottom = "2px solid #cf211b"
    }
});

btnReset.addEventListener("click", function () {
    InputElem.value = ""
    pElem.innerHTML = `32<span>&deg;F</span>`
})
