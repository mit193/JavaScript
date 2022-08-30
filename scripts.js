"Use Strict"

//question 1

function part1() {
    var a = 10;
    var b = 20;

    alert("Sum of "+a+ "and "+b+" is: "+(a+b));
    alert("multi of "+a+ "and "+b+" is: "+(a*b));
}

// question 2

function sum1() {
    var a = 4;
    var b =7;

    alert("Sum of "+a+ "and "+b+" is: "+(a+b));
}

function sum2(){ 
    var a = 5;
    var b = 7;

    alert("multi of " +a+ " and "+b+" is : "+(a*b));
}

function sum3() {
    var a = 4;
    var b = 5;

    alert("modulus of " +a+" and "+b+ "is : " +(a%b));
}

// question 4

var x = 4;

function variable() {
    var y = 10;

    alert("var "+x+" is a global variable ");
    alert("var "+y+" is local variable ");
}

// question 5

var x = 4;
var y = 10;
function variable1() {
    var a = 20;
    var b = 30;
    
    console.log (alert("****Global variable******"));
    console.log (alert("Sum of " +x+ " and "+y+" is: "+ (x+y)));
    console.log(alert("multi of "+x+ " and "+y+" is: "+ (x*y)));

    console.log(alert("***** local variable ******"));
    console.log (alert("Sum of " +a+ " and "+b+" is: "+(a+b)));
    console.log(alert("multi of " +a+ " and "+b+" is: "+(a+b)));
}

// question 6

function addition() {
    var a = 5;
    var b = 7;

    alert("Sum of "+a+ "and "+b+" is: "+(a+b));
}

function substraction() {
    var a = 10;
    var b = 5;

    alert("sub of "+a+" and "+b+" is:  " +(a-b));
}

function multiplication() {
    var a = 5;
    var b = 5;

    alert("multi of "+a+" and "+b+" is: " +(a*b));
}

function division() {
    var a = 10;
    var b = 2;

    alert("div of "+a+" and "+b+" is : " +(a/b));
}

function modulus() {
    var a = 30;
    var b = 10;

    alert("modulus of "+a+" and "+b+" is :  "+(a%b));
}

// question 7
var a = 40;
var b = 20;

function addition1() {
    a+=1;
    alert("Sum of "+a+ "and "+b+" is: "+(a+b));
}

function substraction1() {
    a-=1;
    alert("sub of "+a+" and "+b+" is:  " +(a-b));
}

// question 8

function fahr() {
    var f = prompt(" enter a any fahrenheit temperature ");

    var c = (f - 32) * 5/9;
    alert(f+" fahrenheit to celsius is: "+c);
}

