 // This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// clear all
function clearScreen() {
    document.getElementById("result").value = "";
}