var varText1 = document.getElementById("inputFirstname");
var varText2 = document.getElementById("inputlastname");
var gender1 = document.getElementById("radio1");
var gender2 = document.getElementById("radio2");
var state = document.getElementById("state");
var checkbox1 = document.getElementById("checked");

function validate() {
    checkName();
    gender();
    //checkLastname

    varText1.style.background = "red";
    varText2.style.background = "red";

    selectState();
    checkBox();
}

function  checkName() {
    if(!isNaN(varText1.value)|| !isNaN(varText2.value)) {
        alert("Plese enter a string in name");
    } else {
        return true;
    }

}

function gender() {
    if(gender1.checked == true || gender2.checked == true) {
        return true;

    } else {
        alert("plese select gender");
        return false;
    }
}

function selectState() {
    if(state.value == "") {
        alert("please select state");
        return false;

    } else {
        return true;

    }
}

function checkBox() {
    if(checkbox1.value == false) {
        alert("plese check the check Box");
    } else {
        return true;
    }
}