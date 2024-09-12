document.getElementById("btn_adition_onAction").addEventListener("click", clickaditionEvent);
function clickaditionEvent() {
    let Number01 = document.getElementById("Number01").value
    let Number02 = document.getElementById("Number02").value
    let lbloutput = document.getElementById("lbl_output");
    console.log(typeof Number01);
    Number01 = Number(Number01);
    Number02 = Number(Number02);
    let output = (Number01 + Number02);
    lbloutput.innerHTML = output;
}
document.getElementById("btn_subtracting_onAction").addEventListener("click", clicksubtractingtEvent);
function clicksubtractingtEvent() {
    let Number01 = document.getElementById("Number01").value
    let Number02 = document.getElementById("Number02").value
    let lbloutput = document.getElementById("lbl_output");
    console.log(typeof Number01);
    Number01 = Number(Number01);
    Number02 = Number(Number02);
    let output = Number(Number01 - Number02);
    lbloutput.innerHTML = output;
}
document.getElementById("btn_multiplication_onAction").addEventListener("click", clickmultiplicationEvent);
function clickmultiplicationEvent() {
    let Number01 = document.getElementById("Number01").value
    let Number02 = document.getElementById("Number02").value
    let lbloutput = document.getElementById("lbl_output");
    console.log(typeof Number01);
    Number01 = Number(Number01);
    Number02 = Number(Number02);
    let output = Number(Number01 * Number02);
    lbloutput.innerHTML = output;
}
document.getElementById("btn_division_onAction").addEventListener("click", clickdivisionEvent);
function clickdivisionEvent() {
    let Number01 = document.getElementById("Number01").value
    let Number02 = document.getElementById("Number02").value
    let lbloutput = document.getElementById("lbl_output");
    console.log(typeof Number01);
    Number01 = Number(Number01);
    Number02 = Number(Number02);
    let output = Number(Number01 / Number02);
    lbloutput.innerHTML = output;
}