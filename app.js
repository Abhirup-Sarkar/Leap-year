var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input')
var txtOutput = document.querySelector('#txt-output')

txtOutput.innerText = "Your sentence will be translated here";
txtInput.innerText = "Enter your sentence here";


function clickHandler(input){
    console.log("clicked!");
    console.log("input: ",txtInput.value);
    txtOutput.innerText = txtInput.value;
}
btnTranslate.addEventListener("click",clickHandler);

