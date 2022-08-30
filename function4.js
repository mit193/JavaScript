//Question 4a
function setValue(fName,lName,batmanAge){
	setCustInfo(fName,batmanAge);
	alert(displayCustInfo(lName));
}
function setCustInfo(name,i){
	alert("The name is set as: "+name);
	batman_age = i;
}
function displayCustInfo(name){
	alert("Name is displayed as: "+name);
	return name + " "+batman_age;
}
var batman_age = 27;

//Question 4(b)

function Setvalue1 (fname,lname,batmanAge) {
    setCustInfo4b(lname,batmanAge);
    alert(lname +" "+batman_age);
    displayCustInfo4b(fname);
}

function setCustInfo4b(name,i) {
    alert("The name is set as: "+name);
    batman_age = i;
}

function displayCustInfo4b(name) {
    alert("the name is display as: "+name);
    return name+" "+batman_age;
}
var batman_age = 27;

//question 4c

function Setvalue4c (fname,lname,batmanAge) {
    checkperson();
}

function setCustInfo4c (name,i) {
    alert("The name is set as : "+name);
    batman_age = i;
}

function displayCustInfo4c (name) {
    alert("Name is display as : "+name);
    return name+" "+batman_age;
}

function checkperson () {
    var age = prompt("Enter the age to check who is this person! ");
    if(age === batman_age) {
        alert("this person like a batman");
    } else if (age == 24) {
        alert("This person may be ROBIN");
    } else {
        alert("I am not sure who this joker is");
    }
}

batman_age = 27;

