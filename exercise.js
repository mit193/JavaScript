// question 1

// function que1() {
//     var p = document.getElementById("para");
//     var m = document.getElementById("modify");

//     switch(m.value) {
//         case "1":
//             p.style.visibility = "hidden";
//             break;
//         case "2":
//             p.style.color = "red";
//             break;
//         case "3":
//             p.style.visibility = "visible";
//             p.style.color = "blue"; 
//             break;
        

//         default:
//             alert("select proper option");
//     }
// }

function q1 () {
    var p = document.getElementById("para");
    var m = document.getElementById("modify");

    if(m.value === "1") {
        p.style.visibility = "hidden";

    } else if (m.value === "2") {
        p.style.visibility = "visible";
        p.style.color = "red";

    } else if (m.value === "3") {
        p.style.visibility = "visible";
        p.style.color = "blue";

    } else if (m.value === "4") {
        p.style = "null";

    } else {
        alert("select option");
    }
}

// question 2

function que2() {
var t1 = document.getElementById("firstText");
var t2 = document.getElementById("secondText");

t2.value = t1.value;
t1.value = " ";

}

// question 4

function que4() {
    var div = document.getElementById("border-div");
    var t1 = document.getElementById("colorChange");

    if(t1.value == "black"){
        div.style.border = "4px solid black";

    } else if(t1.value == "red") {
        div.style.border = "4px solid red";
    }
}

// question 5

function que5() {
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var t1 = document.getElementById("text1");
    var t2 = document.getElementById("text2");

    if(t1.value !="") {
        r1.checked = true;

    } else if(t2.value != "") {
        r2.checked = true;

    } else {
        alert("Plese enter in one box");
    }
}

// question 6

function que6(){
	var r = document.getElementById("radioButton");
	var c = document.getElementById("checkBox");
	var s = document.getElementById("dropDown");
	var text1 = s.options[s.selectedIndex].text;
	var p1 = document.getElementById("p1");
	var p2 = document.getElementById("p2");
	var p3 = document.getElementById("p3");
	var div1 = document.getElementById("firstDiv");
	var div2 = document.getElementById("secondDiv");

	div2.style.display = "block";

    if(r.checked == true) {
        p1.innerHTML = "Radio Checked";
        div2.style.display = "block";

    }
    if(c.checked == true) {
        p2.innerHTML = "checkbox checked";
        div2.style.display = "block";

    }
    if(s.value == "") {
        return false;

    }
    else {
        p3.innerHTML = text1;

    }

}

function display() {
    var div2 = document.getElementById("secondDiv");
    div2.style.display = "none";
}

// function 7


var text1 = document.getElementById("text-que11");
var r1 = document.getElementById("radio1-que11");
var r2 = document.getElementById("radio2-que11");
var ch = document.getElementById("checkbox-que11");
var p1 = document.getElementById("p1-q11");
var p2 = document.getElementById("p2-q11");
var p3 = document.getElementById("p3-q11");
var p4 = document.getElementById("p4-q11");
var p5 = document.getElementById("p5-q11");

function que7(){

textCheck();
radioSelect();	
check();
selectFruits();
alert("The form has been successfully submitted");
}

function textCheck(){	
if(isNaN(text1.value))
{
    p1.innerHTML = "string";
}
else if(text1.value == "")
{
    p1.innerHTML = "null";
}
else if(isNaN(text1.value)==false)
{
    p1.innerHTML = "number";
}
}

function radioSelect(){

if(r1.checked == true)
{
    p2.innerHTML = "Radio 1 selected";
}
if(r2.checked == true)
{
    p3.innerHTML = "Radio 2 selected";
}
else
{
    return false;
}
}

function check(){

if(ch.checked == true)
{
    p4.innerHTML = "Checked";
}
else
{
    p4.innerHTML = "unchecked";
}
}

function selectFruits(){
var selOpt = document.getElementById("selectOption");
var textSel = selOpt.options[selOpt.selectedIndex].text;
if(selOpt.value == "")
{
    return false;
}
else
{
    p5.innerHTML = textSel;
}
}

// question 8

function que8() {
    var img = document.getElementById("image-span");
    var text = document.getElementById("image-text");

    img.innerHTML = text.value;
}

