//question3(a)

function SetValue (fname,lname,age) {
    SetCustInfo(fname);
    DisplayCustInfo(lname,age);
    alert(k);
}

function SetCustInfo (name) {
    alert("The First Name set as: "+name);
}

function DisplayCustInfo (name,i) {
    alert("The Last Name set as: "+name);
    k = name +" "+i;
    return k;

}

//question 3(b)

var lname = "Patel"

function SetValue2 (fname,lname,age) {
    SetCustInfo2(fname);
    DisplayCustInfo2(lname,age);
    alert(k);
}

function SetCustInfo2 (name) {
    alert("The Last Name is set as: "+name);
}

function DisplayCustInfo2 (name,i) {
    alert("Name is display as : "+name);
    k = name +" "+i;
    return k;
}

//question 3(c)

function SetValue3 (fname,lname,age) {
    SetCustInfo3(age);
    DisplayCustInfo3(lname);
    alert(fname +" "+ lname);
    alert("Hello " + fname + " " + lname + " at : " +age);
}

function SetCustInfo3 (age) {
    alert("The name is set as :"+age);
}

function DisplayCustInfo3 (name,i) {
    alert("Name is Display as: " +name);
    k = name +" "+i;
    return k;
}

//question 3(d-i)

function SetValue3i (fname,lname,age) {
    SetCustInfo3i(fname);
    DisplayCustInfo3i(lname,age);
    alert(k);
}

function SetCustInfo3i (name) {
    alert("The name is set as : "+name);
}

function DisplayCustInfo3i (name,i) {
    alert("Name is displayed as: "+name)
     var k = 40;
}

//question 3ii

function setValue3ii(fName,lName,age) {
    setCustInfo3ii(fName);
    displayCustInfo3ii(lName,age);
    alert(k);
}

function setCustInfo3ii(name) {
	alert("The name is set as: "+name);
}

function displayCustInfo3ii(name,i) {
	alert("Name is displayed as: "+name);

}
