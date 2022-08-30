function Fahrenheit() {
    var f = document.getElementById("inputvalue");
    var c = document.getElementById("outputevalue");
    
    if(isNaN(f.value)) {
        alert("plese enter in number  value");
        f.style.border = "2px solid red";

    } else {
        c.value = parseInt((f.value -32) *5/9);
        f.style.border = "none";
    }
}

// question 4

function hide() {
    var h = document.getElementById("hidediv");

    h.style.display = 'none';
}

function show() {
    var s = document.getElementById("hidediv");

    s.style.display = 'block';
}

// question 5

var ul = document.getElementById("over_out");
var inp = document.getElementById("inputButton");

function mouseOver () {
    ul.style.visibility = "visible";
}

function mouseOut() {
    ul.style.visibility = "hidden";
}

//question 7

var check = document.getElementsByName("check-list");

function checkAll() {
    for(var i =0;i<check.length;i++) {
        check[i].checked=true;

    }
}

function UncheckAll() {
    for(var i= 0;i<check.length;i++) {
        check[i].checked = false;
    }
}

// question 8

function validate() {
    var state = document.getElementById("State");
    var name = document.getElementById("name");
    var fruit = document.getElementById("fruit");
    var car = document.getElementById("car");
    var City = document.getElementById("City");
    var textState = state.options[state.selectedIndex].text;
    var textname = name.options[name.selectedIndex].text;
    var textfruit = fruit.options[fruit.selectedIndex].text;
    var textcar = car.options[car.selectedIndex].text;
    var textcity = City.options[City.selectedIndex].text;

    if(state.value == " ") {
        alert("plese select state");

    } else if(name.value == " ") {
        alert("plese select name");

    } else if(fruit.value == " ") {
        alert("plese select fruit");

    } else if(car.value == " ") {
        alert("plese select car");

    } else if(City.value == " ") {
        alert("plese select city");

    } else {
        alert("state: "+textState +"\nName: "+textname+ "\nFruit :" +textfruit+ "\nCar :" +textcar+ "\nCity :" +textcity);
    }
}

// question 10

function showvalue() {
    var f = document.getElementById("firstName");
    var l = document.getElementById("lastName");
    var male = document.getElementById("maleId");
    var female = document.getElementById("femaleId");
    var state = document.getElementById("state");
    div1 = document.getElementById("formDiv");
    div2 = document.getElementById("viewDiv");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var edit = document.getElementById("edit");
    var form = document.getElementById("myForm");

    div2.display = "block";

    p1.innerHTML = "<strong>Frist Name : </strong> " +f.value;
    p2.innerHTML = "<strong>Last Name : </strong>" +l.value;

    if(male.checked == true) {
        p3.innerHTML = "<strong>Gender : </strong> "+male.value;

    } else if(female.checked == true) {
        p4.innerHTML = "<strong>Gender : </strong>"+female.value;

    } else {
        return false;
    }

    p4.innerHTML = "<strong> State : </strong>"+state.value;

    div1.style.display = "none";
}

function hidebutton() {
    var div2 = document.getElementById("viewDiv");
    div2.style.display = "none";
}

function showform() {
    div1.style.display = "block";
	div2.style.display = "none";
}

// question 11

function md2() {
    var today = document.getElementById("day");
    var specialdish = document.getElementById("special-dish");

    var d = new Date();
    var days = ["monday","tuesday","wednesday","thrusday","friday","saturday","sunday"];

    today.innerHTML = "today is " + "<strong>" +days[d.getDay()]+"</strong>"
    specialdish.innerHTML = "today special dish is : <strong> pizza </strong>"
}
