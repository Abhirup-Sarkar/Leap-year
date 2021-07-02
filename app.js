var btnTranslate = document.querySelector("#btn-translate");
var yearInput = document.querySelector('#txt-input')
var txtOutput = document.querySelector('#txt-output')

txtOutput.innerText = "Your output will be shown here";
yearInput.innerText = "Enter your year of birth";




function clickHandler(input) {
    console.log("clicked!");
    console.log(yearInput.value);
    input = yearInput.value
    if ((input % 4 == 0) && (input % 100 !== 0) || (input % 400 === 0)) {
        txtOutput.innerText = input + " is a leap year";
    } else {
        txtOutput.innerText = input + " is not a leap year";
    }










}
btnTranslate.addEventListener("click", clickHandler);